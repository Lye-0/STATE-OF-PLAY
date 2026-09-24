'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface OrbitKnotProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"ok-shell\"><span class=\"ring r1\"></span><span class=\"ring r2\"></span><span class=\"ring r3\"></span><span class=\"dot\"></span></div></div>";

/** 小さな軌道を、交差させる。 */
export default function OrbitKnot({ paused = false, className = '', ...props }: OrbitKnotProps) {
  const merged = `sop-ornament sop-orbit-knot ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
