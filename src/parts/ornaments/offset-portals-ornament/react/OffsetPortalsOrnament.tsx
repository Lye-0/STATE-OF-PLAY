'use client';
import React, { useEffect, useRef, type HTMLAttributes } from 'react';
import '../styles.css';
import {mountAmbientOrnament, type AmbientOrnamentController} from '../../../../shared/ambient-ornament.ts';

export interface OffsetPortalsOrnamentProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"x-composition\"><i style=\"--i:0\"></i><i style=\"--i:1\"></i><i style=\"--i:2\"></i><i style=\"--i:3\"></i><i style=\"--i:4\"></i><i style=\"--i:5\"></i></div></div>";

/** 六つのアーチを奥行き方向へ立てた回廊。床の短い足元と厚い側面が門を支え、左右への小さな揺れで隣の開口が見え隠れする。 */
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
