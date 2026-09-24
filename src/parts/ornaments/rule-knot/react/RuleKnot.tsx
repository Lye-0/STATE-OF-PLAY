'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface RuleKnotProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"rk-shell\"><span class=\"l1\"></span><span class=\"l2\"></span><span class=\"node\"></span></div></div>";

/** 交差点に、節をつくる。 */
export default function RuleKnot({ paused = false, className = '', ...props }: RuleKnotProps) {
  const merged = `sop-ornament sop-rule-knot ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
