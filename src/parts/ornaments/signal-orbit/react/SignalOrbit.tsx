'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface SignalOrbitProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"so-shell\"><span class=\"ring r1\"></span><span class=\"ring r2\"></span><span class=\"ring r3\"></span><span class=\"sat s1\"></span><span class=\"sat s2\"></span><span class=\"sat s3\"></span></div></div>";

/** 軌道の上を合図が走る。 */
export default function SignalOrbit({ paused = false, className = '', ...props }: SignalOrbitProps) {
  const merged = `sop-ornament sop-signal-orbit ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
