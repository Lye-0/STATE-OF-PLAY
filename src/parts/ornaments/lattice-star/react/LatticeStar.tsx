'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface LatticeStarProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"ls-shell\"><span class=\"diamond d1\"></span><span class=\"diamond d2\"></span><span class=\"diamond d3\"></span></div></div>";

/** 格子の先で、光が交わる。 */
export default function LatticeStar({ paused = false, className = '', ...props }: LatticeStarProps) {
  const merged = `sop-ornament sop-lattice-star ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
