'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface StitchCometProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"sc-shell\"><svg class=\"sc-drawing\" viewBox=\"0 0 220 170\" focusable=\"false\" aria-hidden=\"true\"><path class=\"sc-ribbon\" d=\"M18 124 C49 61 86 53 116 83 C146 112 173 115 202 44 C220 53 218 59 205 73 C172 137 147 138 114 111 C84 88 55 97 20 140 C11 135 12 129 18 124 Z\"/><path class=\"sc-seam\" d=\"M18 124 C49 61 86 53 116 83 C146 112 173 115 202 44\"/><path class=\"sc-return\" d=\"M20 140 C55 97 84 88 114 111 C147 138 172 137 205 73\"/></svg><span class=\"sc-comet\"><i></i></span></div></div>";

/** 縫い目の上を光が跳ぶ。 */
export default function StitchComet({ paused = false, className = '', ...props }: StitchCometProps) {
  const merged = `sop-ornament sop-stitch-comet ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
