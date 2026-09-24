'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface NotationDotsProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"nd-shell\"><span class=\"dot\" style=\"--i:0\"></span><span class=\"dot\" style=\"--i:1\"></span><span class=\"dot\" style=\"--i:2\"></span><span class=\"dot\" style=\"--i:3\"></span><span class=\"dot\" style=\"--i:4\"></span></div></div>";

/** 小さな点で、余白を整える。 */
export default function NotationDots({ paused = false, className = '', ...props }: NotationDotsProps) {
  const merged = `sop-ornament sop-notation-dots ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
