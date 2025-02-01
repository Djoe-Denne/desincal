import React from "react";

export default function TermiteIcon({ className = "w-24 h-24 text-pest-green" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head */}
      <circle cx="100" cy="40" r="25" fill="currentColor" stroke="currentColor" />

      {/* Mandibles */}
      <line x1="80" y1="30" x2="50" y2="10" stroke="currentColor" />
      <line x1="120" y1="30" x2="150" y2="10" stroke="currentColor" />

      {/* Thorax */}
      <ellipse cx="100" cy="85" rx="40" ry="35" fill="currentColor" stroke="currentColor" />

      {/* Abdomen */}
      <ellipse cx="100" cy="150" rx="50" ry="60" fill="currentColor" stroke="currentColor" />

      {/* Legs */}
      <line x1="60" y1="80" x2="20" y2="60" stroke="currentColor" />
      <line x1="60" y1="100" x2="20" y2="110" stroke="currentColor" />
      <line x1="60" y1="130" x2="20" y2="160" stroke="currentColor" />

      <line x1="140" y1="80" x2="180" y2="60" stroke="currentColor" />
      <line x1="140" y1="100" x2="180" y2="110" stroke="currentColor" />
      <line x1="140" y1="130" x2="180" y2="160" stroke="currentColor" />
    </svg>
  );
}
