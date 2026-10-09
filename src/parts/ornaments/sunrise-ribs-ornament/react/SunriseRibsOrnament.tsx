'use client';
import React, { useEffect, useRef, type HTMLAttributes } from 'react';
import '../styles.css';
import {mountAmbientOrnament, type AmbientOrnamentController} from '../../../../shared/ambient-ornament.ts';

export interface SunriseRibsOrnamentProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"x-composition\"><i style=\"--i:0\"></i><i style=\"--i:1\"></i><i style=\"--i:2\"></i><i style=\"--i:3\"></i><i style=\"--i:4\"></i><i style=\"--i:5\"></i></div></div>";

/** 水平線から放射する六つの稜線の主形を保ち、5pxの実線と4pxの水平線へ磨く。全稜線は水平線上の一つの支点を共有し、共通の開角だけでゆっくり開く。幅広い紙扇R699とは異なり、面を埋めず空を残す光線と水平線の関係を使う。 */
export default function SunriseRibsOrnament({ paused = false, className = '', ...props }: SunriseRibsOrnamentProps) {
  const element = useRef<HTMLDivElement>(null);
  const controller = useRef<AmbientOrnamentController | null>(null);
  useEffect(() => {
    if (!element.current) return;
    const api = mountAmbientOrnament(element.current);
    controller.current = api;
    return () => { api.destroy(); controller.current = null; };
  }, []);
  useEffect(() => { controller.current?.setPaused(paused); }, [paused]);
  const merged = `sop-ornament sop-sunrise-ribs-ornament ${className}`.trim();
  return <div {...props} ref={element} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
