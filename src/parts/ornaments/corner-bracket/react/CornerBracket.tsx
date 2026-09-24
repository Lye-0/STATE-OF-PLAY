'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface CornerBracketProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"cb-shell\"><span class=\"corner tl\"></span><span class=\"corner tr\"></span><span class=\"corner bl\"></span><span class=\"corner br\"></span></div></div>";

/** 角に置くだけの、軽い印。 */
export default function CornerBracket({ paused = false, className = '', ...props }: CornerBracketProps) {
  const merged = `sop-ornament sop-corner-bracket ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
