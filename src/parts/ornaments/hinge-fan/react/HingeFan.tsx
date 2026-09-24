'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface HingeFanProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"hf-shell\"><span class=\"blade\" style=\"--i:0\"></span><span class=\"blade\" style=\"--i:1\"></span><span class=\"blade\" style=\"--i:2\"></span><span class=\"blade\" style=\"--i:3\"></span><span class=\"blade\" style=\"--i:4\"></span><span class=\"blade\" style=\"--i:5\"></span><span class=\"pivot\"></span></div></div>";

/** 開く気配だけを残す。 */
export default function HingeFan({ paused = false, className = '', ...props }: HingeFanProps) {
  const merged = `sop-ornament sop-hinge-fan ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
