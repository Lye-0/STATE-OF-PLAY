'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface KineticCrossProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"kc-shell\"><span class=\"arm a1\"></span><span class=\"arm a2\"></span><span class=\"arm a3\"></span><span class=\"arm a4\"></span><span class=\"node\"></span><span class=\"orbit\"></span></div></div>";

/** 交点が、静かに回る。 */
export default function KineticCross({ paused = false, className = '', ...props }: KineticCrossProps) {
  const merged = `sop-ornament sop-kinetic-cross ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
