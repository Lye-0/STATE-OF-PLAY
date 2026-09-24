'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface EchoGlyphProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"eg-shell\"><span class=\"seg a\"></span><span class=\"seg b\"></span><span class=\"seg c\"></span><span class=\"seg d\"></span><span class=\"seg e\"></span></div></div>";

/** 記号の残響だけが漂う。 */
export default function EchoGlyph({ paused = false, className = '', ...props }: EchoGlyphProps) {
  const merged = `sop-ornament sop-echo-glyph ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
