'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface PrismWellProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"pw-shell\"><span class=\"hex h1\"></span><span class=\"hex h2\"></span><span class=\"hex h3\"></span><span class=\"beam\"></span><span class=\"beam b2\"></span></div></div>";

/** 色を吸い込む浅い井戸。 */
export default function PrismWell({ paused = false, className = '', ...props }: PrismWellProps) {
  const merged = `sop-ornament sop-prism-well ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
