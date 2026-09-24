'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface SignalPinsProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"sp-shell\"><span class=\"pin\" style=\"--i:0\"></span><span class=\"pin\" style=\"--i:1\"></span><span class=\"pin\" style=\"--i:2\"></span><span class=\"pin\" style=\"--i:3\"></span><span class=\"pin\" style=\"--i:4\"></span></div></div>";

/** 細い印が、リズムを刻む。 */
export default function SignalPins({ paused = false, className = '', ...props }: SignalPinsProps) {
  const merged = `sop-ornament sop-signal-pins ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
