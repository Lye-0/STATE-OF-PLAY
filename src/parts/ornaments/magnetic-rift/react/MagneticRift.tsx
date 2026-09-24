'use client';
import React, { type HTMLAttributes } from 'react';
import '../styles.css';

export interface MagneticRiftProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"mr-shell\"><span class=\"plate left\"></span><span class=\"plate right\"></span><span class=\"spark s1\"></span><span class=\"spark s2\"></span><span class=\"spark s3\"></span><span class=\"core\"></span></div></div>";

/** 反発と吸引の境目。 */
export default function MagneticRift({ paused = false, className = '', ...props }: MagneticRiftProps) {
  const merged = `sop-ornament sop-magnetic-rift ${className}`.trim();
  return <div {...props} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
