'use client';
import React, { useEffect, useRef, type HTMLAttributes } from 'react';
import '../styles.css';
import {mountAmbientOrnament, type AmbientOrnamentController} from '../../../../shared/ambient-ornament.ts';

export interface OffsetPortalsOrnamentProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"x-composition\"><i style=\"--i:0\"></i><i style=\"--i:1\"></i><i style=\"--i:2\"></i><i style=\"--i:3\"></i><i style=\"--i:4\"></i><i style=\"--i:5\"></i></div></div>";

/** 六つの直角の門の入れ子を保ち、3pxの読む辺と6pxの側断面で前後を明確にする。奥の門の左右のずれだけが同じ軸で往復し、全体が拡大回転するhoverを廃した。鞍の曲面と区別し、直角・閉じた門・左右の視差を主形にする。 */
export default function OffsetPortalsOrnament({ paused = false, className = '', ...props }: OffsetPortalsOrnamentProps) {
  const element = useRef<HTMLDivElement>(null);
  const controller = useRef<AmbientOrnamentController | null>(null);
  useEffect(() => {
    if (!element.current) return;
    const api = mountAmbientOrnament(element.current);
    controller.current = api;
    return () => { api.destroy(); controller.current = null; };
  }, []);
  useEffect(() => { controller.current?.setPaused(paused); }, [paused]);
  const merged = `sop-ornament sop-offset-portals-ornament ${className}`.trim();
  return <div {...props} ref={element} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
