'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface SoftSparkProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"ss-shell\"><span class=\"v\"></span><span class=\"h\"></span><span class=\"d1\"></span><span class=\"d2\"></span></div></div>";

/** 控えめな閃き。 */
export default function SoftSpark({ paused = false, className = '', ...props }: SoftSparkProps) {
  const merged = `sop-ornament sop-soft-spark ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
