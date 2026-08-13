"use client";

import React from "react";
import Link from "next/link";
import styles from './PrimaryButton.module.css';

interface PrimaryButtonProps {
    label: string;
    icon?: React.ReactNode;
    href?: string;
    target?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    whiteBtn?: boolean;
}

const PrimaryButton = ({
    label,
    icon,
    href,
    target,
    onClick,
    whiteBtn,
}: PrimaryButtonProps) => {
    const className = `${styles['gradient-button']} ${
        whiteBtn ? 'bg-white text-[#0B52DC]' : "bg-[linear-gradient(to_bottom,#4684FF,#074FDA)] text-white"
    }`;

    // If onClick is provided, render a button (used for ContactPopup trigger)
    if (onClick) {
        return (
            <button
                type="button"
                onClick={onClick}
                className={className}
                style={{ lineHeight: "26px" }}
            >
                {label}
                {icon && <span className="icon">{icon}</span>}
            </button>
        );
    }

    // Otherwise render a Link — default to Calendly booking page
    const destination = href || "https://calendly.com/l2global/discovery";
    const linkTarget = target || (destination.startsWith("http") ? "_blank" : undefined);

    return (
        <Link
            href={destination}
            target={linkTarget}
            rel={linkTarget === "_blank" ? "noopener noreferrer" : undefined}
            className={className}
            style={{ lineHeight: "26px" }}
        >
            {label}
            {icon && <span className="icon">{icon}</span>}
        </Link>
    );
};

export default PrimaryButton;
