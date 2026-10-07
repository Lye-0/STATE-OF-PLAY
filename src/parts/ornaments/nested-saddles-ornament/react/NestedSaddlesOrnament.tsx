'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface NestedSaddlesOrnamentProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"x-composition\"><i style=\"--i:0\"></i><i style=\"--i:1\"></i><i style=\"--i:2\"></i><i style=\"--i:3\"></i><i style=\"--i:4\"></i><i style=\"--i:5\"></i></div></div>";

/** 羽根が光を散らす。 */
export default function NestedSaddlesOrnament({ paused = false, className = '', ...props }: NestedSaddlesOrnamentProps) {
  const merged = `sop-ornament sop-nested-saddles-ornament ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
