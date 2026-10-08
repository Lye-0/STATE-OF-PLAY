'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 二本の側桁と厚みのある横木を、縦の見出しへ組むタブ。選択した段だけを明るい面へし、本文の上と下の受けを側桁へ接続する。縦配置を初期状態とし、横へ変更しても二本の桁と段の関係を保つ。 */
export default function RungTabs({className='',...props}:TabsProps){return <TabsView {...props} orientation={props.orientation??'vertical'} panelArt={<span className="sop-tab-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-rung-tabs ${className}`}/>;}
