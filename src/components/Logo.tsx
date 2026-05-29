import React from "react";

export default function Logo({ 
  className = "w-8 h-8", 
  color = "currentColor"
}: { 
  className?: string; 
  color?: string;
}) {
  return (
    <svg 
      viewBox="0 0 604 508" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      id="mgm-brand-monogram-svg"
    >
      <path 
        d="M598.824 5.11332L538.535 5.00439L408.562 175.715L321.341 60.1469H282.483L195.262 175.715L65.2892 5.00439L5 5.11332V440.726H62.4027V90.7L195.262 267.837L301.912 125.264L408.535 267.837L541.421 90.7V440.726H598.824V5.11332Z" 
        fill={color} 
        stroke={color} 
        strokeWidth="10"
        strokeLinejoin="round"
      />
      <path 
        d="M400.067 440.67H204.154L302.11 271.004L400.067 440.67Z" 
        fill={color} 
        stroke={color} 
        strokeWidth="10"
        strokeLinejoin="round"
      />
    </svg>
  );
}
