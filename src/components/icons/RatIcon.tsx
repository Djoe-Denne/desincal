import React from "react";

export default function RatIcon({ className = "w-24 h-24 text-pest-green" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head shape */}
      <path
        d="M50 100 Q20 60 50 30 Q90 0 140 30 Q180 60 140 100 Q160 120 170 140 Q180 160 160 170 Q140 180 100 170 Q60 180 40 170 Q20 160 30 140 Q40 120 50 100"
        fill="currentColor"
        stroke="currentColor"
      />

      {/* Eyes */}
      <circle cx="70" cy="60" r="6" fill="currentColor" />
      <circle cx="130" cy="60" r="6" fill="currentColor" />

      {/* Nose */}
      <circle cx="100" cy="100" r="5" fill="currentColor" />

      {/* Ears */}
      <ellipse cx="40" cy="40" rx="20" ry="30" fill="currentColor" stroke="currentColor" />
      <ellipse cx="160" cy="40" rx="20" ry="30" fill="currentColor" stroke="currentColor" />

      {/* Teeth */}
      <rect x="90" y="110" width="8" height="12" fill="white" stroke="currentColor" />
      <rect x="102" y="110" width="8" height="12" fill="white" stroke="currentColor" />

      {/* Whiskers */}
      <line x1="40" y1="100" x2="10" y2="90" stroke="currentColor" />
      <line x1="40" y1="110" x2="10" y2="110" stroke="currentColor" />
      <line x1="40" y1="120" x2="10" y2="130" stroke="currentColor" />

      <line x1="160" y1="100" x2="190" y2="90" stroke="currentColor" />
      <line x1="160" y1="110" x2="190" y2="110" stroke="currentColor" />
      <line x1="160" y1="120" x2="190" y2="130" stroke="currentColor" />
    </svg>
  );
}
