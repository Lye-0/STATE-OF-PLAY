'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface FanSparkProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"fs-shell\"><span class=\"blade\" style=\"--i:0\"></span><span class=\"blade\" style=\"--i:1\"></span><span class=\"blade\" style=\"--i:2\"></span><span class=\"blade\" style=\"--i:3\"></span><span class=\"blade\" style=\"--i:4\"></span><span class=\"blade\" style=\"--i:5\"></span><span class=\"blade\" style=\"--i:6\"></span><span class=\"core\"></span></div></div>";

/** 羽根が光を散らす。 */
export default function FanSpark({ paused = false, className = '', ...props }: FanSparkProps) {
  const merged = `sop-ornament sop-fan-spark ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
