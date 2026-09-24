'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface IndexTicksProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"it-shell\"><span class=\"tick\" style=\"--i:0\"></span><span class=\"tick\" style=\"--i:1\"></span><span class=\"tick\" style=\"--i:2\"></span><span class=\"tick\" style=\"--i:3\"></span><span class=\"tick\" style=\"--i:4\"></span><span class=\"tick\" style=\"--i:5\"></span><span class=\"tick\" style=\"--i:6\"></span></div></div>";

/** 細い目盛りで、流れを作る。 */
export default function IndexTicks({ paused = false, className = '', ...props }: IndexTicksProps) {
  const merged = `sop-ornament sop-index-ticks ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
