'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface TideKnotProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"tk-shell\"><span class=\"loop l1\"></span><span class=\"loop l2\"></span><span class=\"loop l3\"></span></div></div>";

/** 波が結び目になって往復する。 */
export default function TideKnot({ paused = false, className = '', ...props }: TideKnotProps) {
  const merged = `sop-ornament sop-tide-knot ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
