'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 細いフィルムの穿孔帯と、その下へ接続する字幕の窓を組むタブ。14pxの帯に5pxの孔を実際に抜き、選択した窓を明るい本文の紙へつなぐ。暗い帯を本文へ広げず、読む見出しと本文は固定する。 */
export default function FilmCaptionTabs({className='',...props}:TabsProps){return <TabsView {...props} panelArt={<span className="sop-tab-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-film-caption-tabs ${className}`}/>;}
