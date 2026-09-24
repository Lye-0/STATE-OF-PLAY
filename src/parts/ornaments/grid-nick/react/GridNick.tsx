'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface GridNickProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"gn-shell\"><span class=\"cell\" style=\"--i:0\"></span><span class=\"cell\" style=\"--i:1\"></span><span class=\"cell\" style=\"--i:2\"></span><span class=\"cell\" style=\"--i:3\"></span><span class=\"cell\" style=\"--i:4\"></span><span class=\"cell\" style=\"--i:5\"></span><span class=\"cell\" style=\"--i:6\"></span><span class=\"cell\" style=\"--i:7\"></span><span class=\"cell\" style=\"--i:8\"></span></div></div>";

/** 小さな格子の気配。 */
export default function GridNick({ paused = false, className = '', ...props }: GridNickProps) {
  const merged = `sop-ornament sop-grid-nick ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
