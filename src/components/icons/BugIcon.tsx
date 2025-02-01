import React from "react";

export default function BugIcon({ className = "w-24 h-24 text-pest-green" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <ellipse cx="100" cy="120" rx="50" ry="70" fill="currentColor" stroke="currentColor" />

      {/* Head */}
      <circle cx="100" cy="50" r="25" fill="currentColor" stroke="currentColor" />

      {/* Legs */}
      <line x1="50" y1="90" x2="10" y2="70" stroke="currentColor" />
      <line x1="50" y1="120" x2="10" y2="120" stroke="currentColor" />
      <line x1="50" y1="150" x2="10" y2="170" stroke="currentColor" />

      <line x1="150" y1="90" x2="190" y2="70" stroke="currentColor" />
      <line x1="150" y1="120" x2="190" y2="120" stroke="currentColor" />
      <line x1="150" y1="150" x2="190" y2="170" stroke="currentColor" />

      {/* Antennas */}
      <line x1="90" y1="30" x2="60" y2="10" stroke="currentColor" />
      <line x1="110" y1="30" x2="140" y2="10" stroke="currentColor" />
    </svg>
  );
}
