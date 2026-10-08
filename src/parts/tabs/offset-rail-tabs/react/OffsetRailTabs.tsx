'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 左右の位置をずらした案内レールへ、選択した章の紙を収めるタブ。上の見出しはレールをまたぐ短い折面で留め、左の溝と下の斜めの接合を連続する二つの断面へ作る。縦配置では一本の左のレールへ選択した保持片を横から渡し、読む紙と見出しは動かさない。 */
export default function OffsetRailTabs({className='',...props}:TabsProps){return <TabsView {...props} panelArt={<span className="sop-tab-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-offset-rail-tabs ${className}`}/>;}
