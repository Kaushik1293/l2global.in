// Server-side proxy for the Salesforce Web-to-Lead form.
//
// The site is a static export (see next.config.ts `output: 'export'`), so it has no
// server of its own — the browser used to POST straight to Salesforce's Web-to-Lead
// endpoint through a hidden iframe, which is unreliable on its own: many browsers,
// ad blockers and privacy extensions silently block third-party form posts / iframes
// to marketing and CRM domains, with no way for the page to know. Posting server-side
// removes that failure mode entirely.
//
// IMPORTANT LIMITATION (verified by hand): Salesforce's classic Web-to-Lead servlet is
// "fire and forget" by design — it returns an identical 200 OK + meta-refresh-to-retURL
// HTML page whether the lead was actually created or not (confirmed by testing a valid
// org ID, an invalid org ID, and a request missing the required last_name field — all
// three produced byte-identical responses). There is no HTTP-level signal, client or
// server side, that distinguishes a created lead from a silently rejected one (e.g. a
// submitting domain not in Trusted Domains for Referrer). So `success: true` here means
// "the request reached Salesforce and it responded normally" — not "the lead definitely
// exists." Genuine confirmation requires checking Salesforce directly, or switching to
// the Salesforce REST API (POST /sobjects/Lead) with a Connected App / OAuth, which needs
// Salesforce admin setup.

const SF_ENDPOINT = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D4P0000010dcs';
const RET_URL = 'https://l2global.in/contact-us';

// The "service" dropdown has no confirmed Salesforce custom-field ID (Web-to-Lead custom
// fields must be referenced by their generated 00N... ID, not a plain name), so instead of
// silently dropping the selection, fold the readable label into the standard Description
// field, which is guaranteed to save.
const SERVICE_LABELS = {
  agentforce: 'Salesforce Agentforce AI',
  'sap-ai': 'SAP Joule AI Implementation',
  'sap-s4hana': 'SAP S/4HANA / RISE with SAP',
  salesforce: 'Salesforce / CRM Consulting',
  sap: 'SAP Integration & Implementation',
  mulesoft: 'MuleSoft Integration',
  api: 'API Integration Services',
  aws: 'AWS Cloud Services',
  oracle: 'Oracle Managed Services',
  'data-science': 'Data Science & Machine Learning',
  'manufacturing-cloud': 'Agentforce Manufacturing Cloud',
  'financial-services': 'Financial Services Cloud',
  cpq: 'CPQ & Revenue Cloud',
  web: 'Website Design & Development',
  custom: 'Custom IT Solutions',
  other: 'Other / Not Sure',
};

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, error: 'Method not allowed' }),
    };
  }

  let data;
  try {
    data = JSON.parse(event.body || '{}');
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, error: 'Invalid request body' }),
    };
  }

  const { last_name, email, mobile, company, city, description, service } = data;

  if (!last_name || typeof last_name !== 'string' || !last_name.trim()) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, error: 'Name is required' }),
    };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, error: 'A valid email is required' }),
    };
  }

  const serviceLabel = SERVICE_LABELS[service] || service || '';
  const fullDescription = serviceLabel
    ? `Service Interested In: ${serviceLabel}\n\n${description || ''}`
    : (description || '');

  const params = new URLSearchParams();
  params.set('oid', '00D4P0000010dcs');
  params.set('retURL', RET_URL);
  params.set('lead_source', 'Website');
  params.set('last_name', last_name);
  params.set('email', email);
  if (mobile) params.set('mobile', mobile);
  if (company) params.set('company', company);
  if (city) params.set('city', city);
  params.set('description', fullDescription);

  try {
    const sfRes = await fetch(SF_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    // Salesforce always answers 200 for this endpoint (see limitation note above), so a
    // non-2xx or network failure is the only concrete signal we can act on here.
    if (sfRes.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      };
    }

    return {
      statusCode: 502,
      body: JSON.stringify({
        success: false,
        error: 'Salesforce returned an unexpected response',
        sfStatus: sfRes.status,
      }),
    };
  } catch (err) {
    return {
      statusCode: 502,
      body: JSON.stringify({
        success: false,
        error: 'Failed to reach Salesforce',
        detail: String(err),
      }),
    };
  }
};
