'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface HaloAxisProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"ha-shell\"><span class=\"axis horizontal\"></span><span class=\"axis vertical\"></span><span class=\"ring r1\"></span><span class=\"ring r2\"></span><span class=\"ring r3\"></span></div></div>";

/** 中心へ戻る、薄い輪郭。 */
export default function HaloAxis({ paused = false, className = '', ...props }: HaloAxisProps) {
  const merged = `sop-ornament sop-halo-axis ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
