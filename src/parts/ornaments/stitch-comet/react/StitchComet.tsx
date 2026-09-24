'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface StitchCometProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"sc-shell\"><span class=\"path p1\"></span><span class=\"path p2\"></span><span class=\"head\"></span></div></div>";

/** 縫い目の上を光が跳ぶ。 */
export default function StitchComet({ paused = false, className = '', ...props }: StitchCometProps) {
  const merged = `sop-ornament sop-stitch-comet ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
