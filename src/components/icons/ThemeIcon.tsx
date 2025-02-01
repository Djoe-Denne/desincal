import React from 'react';
import BugIcon from './BugIcon';
import RatIcon from './RatIcon';
import BedBugIcon from './BedBugIcon';
import TermiteIcon from './TermiteIcon';

interface ThemeIconProps {
  icon: string;
  className?: string;
}

export default function ThemeIcon({ icon, className = "w-24 h-24 text-pest-green" }: ThemeIconProps) {
  switch (icon) {
    case 'bug':
      return <BugIcon className={className} />;
    case 'rat':
      return <RatIcon className={className} />;
    case 'bed':
      return <BedBugIcon className={className} />;
    case 'termite':
      return <TermiteIcon className={className} />;
    default:
      return null;
  }
}