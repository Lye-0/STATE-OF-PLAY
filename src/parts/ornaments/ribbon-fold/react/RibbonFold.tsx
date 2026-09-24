'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface RibbonFoldProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"rf-shell\"><span class=\"strip s1\"></span><span class=\"strip s2\"></span><span class=\"strip s3\"></span><span class=\"strip s4\"></span></div></div>";

/** 帯が折れ、ほどける。 */
export default function RibbonFold({ paused = false, className = '', ...props }: RibbonFoldProps) {
  const merged = `sop-ornament sop-ribbon-fold ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
