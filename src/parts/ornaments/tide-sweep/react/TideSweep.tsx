'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface TideSweepProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"ts-shell\"><span class=\"wave w1\"></span><span class=\"wave w2\"></span><span class=\"wave w3\"></span></div></div>";

/** 静かな波を、面に流す。 */
export default function TideSweep({ paused = false, className = '', ...props }: TideSweepProps) {
  const merged = `sop-ornament sop-tide-sweep ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
