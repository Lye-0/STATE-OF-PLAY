'use client';
import React from 'react';
import FiberOpticScrollArea from './FiberOpticScrollArea';
export default function Example(){return <FiberOpticScrollArea style={{height:300}} viewportLabel="読み進める内容">{Array.from({length:16},(_,i)=><p key={i}>セクション {i+1} — 自由なコンテンツを配置できます。</p>)}</FiberOpticScrollArea>;}
