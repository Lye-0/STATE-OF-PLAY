'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 銅の通し棒へ、三枚の章扉を厚みのある留め片で掛けるタブ。6pxの棒が26pxの中空の折返しを通り、左の止め軸で本文の背へ固定される。縦配置では棒を左へ立て、同じ中空の留め片で各紙を横から掛ける。選択した紙だけ本文へ連続し、見出しは動かさない。 */
export default function CopperPinTabs({className='',...props}:TabsProps){return <TabsView {...props} panelArt={<span className="sop-tab-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-copper-pin-tabs ${className}`}/>;}
