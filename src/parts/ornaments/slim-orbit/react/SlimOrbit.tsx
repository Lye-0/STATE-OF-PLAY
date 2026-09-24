'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface SlimOrbitProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"so-shell\"><span class=\"ring\"></span><span class=\"dot\"></span></div></div>";

/** ひと筆の軌道を残す。 */
export default function SlimOrbit({ paused = false, className = '', ...props }: SlimOrbitProps) {
  const merged = `sop-ornament sop-slim-orbit ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
