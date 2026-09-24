'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface QuietDividerProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"qd-shell\"><span class=\"line\"></span><span class=\"dot\"></span></div></div>";

/** 区切りを、ほのかに示す。 */
export default function QuietDivider({ paused = false, className = '', ...props }: QuietDividerProps) {
  const merged = `sop-ornament sop-quiet-divider ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
