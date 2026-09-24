'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface HingeStarProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"hs-shell\"><span class=\"arm\" style=\"--i:0\"></span><span class=\"arm\" style=\"--i:1\"></span><span class=\"arm\" style=\"--i:2\"></span><span class=\"arm\" style=\"--i:3\"></span><span class=\"arm\" style=\"--i:4\"></span><span class=\"ring\"></span><span class=\"core\"></span></div></div>";

/** 星の骨格が開閉する。 */
export default function HingeStar({ paused = false, className = '', ...props }: HingeStarProps) {
  const merged = `sop-ornament sop-hinge-star ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
