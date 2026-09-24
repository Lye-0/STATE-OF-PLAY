'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface AsterismBurstProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"ob-center\"></div><div class=\"ob-burst\"><i class=\"ray\" style=\"--i:0\"></i><i class=\"ray\" style=\"--i:1\"></i><i class=\"ray\" style=\"--i:2\"></i><i class=\"ray\" style=\"--i:3\"></i><i class=\"ray\" style=\"--i:4\"></i><i class=\"ray\" style=\"--i:5\"></i><i class=\"ray\" style=\"--i:6\"></i><i class=\"ray\" style=\"--i:7\"></i></div></div>";

/** 散った光を、ひとつに結ぶ。 */
export default function AsterismBurst({ paused = false, className = '', ...props }: AsterismBurstProps) {
  const merged = `sop-ornament sop-asterism-burst ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
