'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 暗い作業面と本文の素材を揃えたタブ。選択面を青灰の浅い一段、本文を同じ系統の明るい暗色へ整え、暗い列と白い紙を継いだ強い明暗差を除く。見出しの下の細い基準線で選択を示し、任意の本文と入力を読みやすく保つ。 */
export default function NightWorkTabs({className='',...props}:TabsProps){return <TabsView {...props} panelArt={<span className="sop-tab-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-night-work-tabs ${className}`}/>;}
