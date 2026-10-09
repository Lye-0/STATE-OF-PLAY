'use client';
import React, { useEffect, useRef, type HTMLAttributes } from 'react';
import '../styles.css';
import {mountAmbientOrnament, type AmbientOrnamentController} from '../../../../shared/ambient-ornament.ts';

export interface NestedSaddlesOrnamentProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"x-composition\"><i style=\"--i:0\"></i><i style=\"--i:1\"></i><i style=\"--i:2\"></i><i style=\"--i:3\"></i><i style=\"--i:4\"></i><i style=\"--i:5\"></i></div></div>";

/** 六つの鞍の入れ子を保ち、対角の曲辺と直辺、厚い側断面、奥行きのある傾斜へ磨く。平面の角丸枠から、向かい合う曲面がねじれる鞍の向きを読みやすくする。直角の閉じた門R701と素材・曲率・動きの軸を区別し、狭幅でも全曲面を収める。 */
export default function NestedSaddlesOrnament({ paused = false, className = '', ...props }: NestedSaddlesOrnamentProps) {
  const element = useRef<HTMLDivElement>(null);
  const controller = useRef<AmbientOrnamentController | null>(null);
  useEffect(() => {
    if (!element.current) return;
    const api = mountAmbientOrnament(element.current);
    controller.current = api;
    return () => { api.destroy(); controller.current = null; };
  }, []);
  useEffect(() => { controller.current?.setPaused(paused); }, [paused]);
  const merged = `sop-ornament sop-nested-saddles-ornament ${className}`.trim();
  return <div {...props} ref={element} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
