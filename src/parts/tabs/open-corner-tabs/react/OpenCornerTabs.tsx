'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 二つの角を大きく開いて、露出する断面を外へずらした石の資料面。右上54pxと左下48pxの実際の空隙を抜き、同じ5pxのL断面を12px外へ離して、閉じた箱にしない。選択した見出しは残る天板へ連続し、文字は開いた角へ入らない余白を保つ。 */
export default function OpenCornerTabs({className='',...props}:TabsProps){return <TabsView {...props} panelArt={<span className="sop-tab-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-open-corner-tabs ${className}`}/>;}
