import React from "react";

export default function BedBugIcon({ className = "w-24 h-24 text-pest-green" }) {
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
      <ellipse cx="100" cy="120" rx="55" ry="75" fill="currentColor" stroke="currentColor" />

      {/* Head */}
      <circle cx="100" cy="50" r="20" fill="currentColor" stroke="currentColor" />

      {/* Legs */}
      <line x1="50" y1="80" x2="10" y2="60" stroke="currentColor" />
      <line x1="50" y1="110" x2="10" y2="100" stroke="currentColor" />
      <line x1="50" y1="140" x2="10" y2="160" stroke="currentColor" />

      <line x1="150" y1="80" x2="190" y2="60" stroke="currentColor" />
      <line x1="150" y1="110" x2="190" y2="100" stroke="currentColor" />
      <line x1="150" y1="140" x2="190" y2="160" stroke="currentColor" />

      {/* Antennas */}
      <line x1="85" y1="30" x2="60" y2="10" stroke="currentColor" />
      <line x1="115" y1="30" x2="140" y2="10" stroke="currentColor" />

      {/* Abdomen Lines */}
      <line x1="70" y1="100" x2="130" y2="100" stroke="currentColor" />
      <line x1="75" y1="120" x2="125" y2="120" stroke="currentColor" />
      <line x1="80" y1="140" x2="120" y2="140" stroke="currentColor" />
    </svg>
  );
}
