'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface FoldMarkProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"fm-shell\"><span class=\"edge e1\"></span><span class=\"edge e2\"></span><span class=\"edge e3\"></span><span class=\"edge e4\"></span><span class=\"edge e5\"></span></div></div>";

/** 折れ線の緊張だけを置く。 */
export default function FoldMark({ paused = false, className = '', ...props }: FoldMarkProps) {
  const merged = `sop-ornament sop-fold-mark ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
