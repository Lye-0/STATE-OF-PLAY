'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface RibbonCometProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"rc-shell\"><span class=\"trail t1\"></span><span class=\"trail t2\"></span><span class=\"trail t3\"></span><span class=\"head\"></span></div></div>";

/** 余白を横切る、光の尾。 */
export default function RibbonComet({ paused = false, className = '', ...props }: RibbonCometProps) {
  const merged = `sop-ornament sop-ribbon-comet ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
