'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 斜めの縫い糸が、孔を通りながら本文の背を綴じるタブ。24pxの革の背に実際の孔を抜き、連続する糸を孔の中心へ接続する。章扉は本文と同じ紙へ揃え、紺と橙の大きい配色を使わず、革・紙・糸のつながりで形を作る。 */
export default function StitchedFolioTabs({className='',...props}:TabsProps){return <TabsView {...props} panelArt={<span className="sop-tab-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-stitched-folio-tabs ${className}`}/>;}
