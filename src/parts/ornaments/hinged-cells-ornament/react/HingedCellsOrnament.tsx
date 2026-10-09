'use client';
import React, { useEffect, useRef, type HTMLAttributes } from 'react';
import '../styles.css';
import {mountAmbientOrnament, type AmbientOrnamentController} from '../../../../shared/ambient-ornament.ts';

export interface HingedCellsOrnamentProps extends HTMLAttributes<HTMLDivElement> {
  paused?: boolean;
}

const markup = "<div class=\"or-stage\" aria-hidden=\"true\"><div class=\"x-composition\"><i style=\"--i:0\"></i><i style=\"--i:1\"></i><i style=\"--i:2\"></i><i style=\"--i:3\"></i><i style=\"--i:4\"></i><i style=\"--i:5\"></i></div></div>";

/** 独立に回る六つの小箱を廃し、六枚の板が実際の端を共有して折れる一つの屏風へ再構成する。共通の蝶番角から各板のx/zと回転を計算し、隣の端を同じ三次元位置へ接続する。平らな明暗の表裏・厚い小口と蛇腹の奥行きが主形となり、hoverの別回転は使わない。 */
export default function HingedCellsOrnament({ paused = false, className = '', ...props }: HingedCellsOrnamentProps) {
  const element = useRef<HTMLDivElement>(null);
  const controller = useRef<AmbientOrnamentController | null>(null);
  useEffect(() => {
    if (!element.current) return;
    const api = mountAmbientOrnament(element.current);
    controller.current = api;
    return () => { api.destroy(); controller.current = null; };
  }, []);
  useEffect(() => { controller.current?.setPaused(paused); }, [paused]);
  const merged = `sop-ornament sop-hinged-cells-ornament ${className}`.trim();
  return <div {...props} ref={element} className={merged} data-paused={paused ? 'true' : 'false'} dangerouslySetInnerHTML={{ __html: markup }} />;
}
