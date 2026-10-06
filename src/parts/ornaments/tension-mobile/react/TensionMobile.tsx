'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface TensionMobileProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"tm-bar\"><span style=\"--i:0\"></span><span style=\"--i:1\"></span><span style=\"--i:2\"></span><span style=\"--i:3\"></span></div></div>";

/** 羽根が光を散らす。 */
export default function TensionMobile({ paused = false, className = '', ...props }: TensionMobileProps) {
  const merged = `sop-ornament sop-tension-mobile ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
