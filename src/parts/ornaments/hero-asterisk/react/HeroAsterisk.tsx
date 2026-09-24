'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface HeroAsteriskProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = '<div class="or-stage" aria-hidden="true"><span class="hero-asterisk-mark">✳</span></div>';

/** The decorative mark from the STATE OF PLAY hero. */
export default function HeroAsterisk({ paused = false, className = '', ...props }: HeroAsteriskProps) {
  const merged = `sop-ornament sop-hero-asterisk ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
