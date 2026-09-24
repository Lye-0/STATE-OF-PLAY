'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface EchoBeamProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"eb-shell\"><span class=\"bar b1\"></span><span class=\"bar b2\"></span><span class=\"bar b3\"></span><span class=\"bar b4\"></span></div></div>";

/** 残響のような細い帯。 */
export default function EchoBeam({ paused = false, className = '', ...props }: EchoBeamProps) {
  const merged = `sop-ornament sop-echo-beam ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
