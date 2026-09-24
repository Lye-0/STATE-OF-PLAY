'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface PrismSpokesProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"ps-shell\"><span class=\"beam b1\"></span><span class=\"beam b2\"></span><span class=\"beam b3\"></span><span class=\"beam b4\"></span><span class=\"gem\"></span></div></div>";

/** 色の気配が、放射する。 */
export default function PrismSpokes({ paused = false, className = '', ...props }: PrismSpokesProps) {
  const merged = `sop-ornament sop-prism-spokes ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
