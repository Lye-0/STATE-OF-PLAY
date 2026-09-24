'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface LiquidLensProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"ll-shell\"><span class=\"ring r1\"></span><span class=\"ring r2\"></span><span class=\"ring r3\"></span><span class=\"glint\"></span><span class=\"drop\"></span></div></div>";

/** 液体の焦点が揺れる。 */
export default function LiquidLens({ paused = false, className = '', ...props }: LiquidLensProps) {
  const merged = `sop-ornament sop-liquid-lens ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
