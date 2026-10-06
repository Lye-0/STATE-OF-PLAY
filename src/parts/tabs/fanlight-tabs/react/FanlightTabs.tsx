'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 縦の透過帯が見出しの後ろで開き、選択した内容へ光を導く。 */
export default function FanlightTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-fanlight-tabs ${className}`}/>;}
