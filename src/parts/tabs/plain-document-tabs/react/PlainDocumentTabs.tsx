'use client';
import React from 'react';
import {TabsView,type TabsProps} from '../../../../shared/tabs-view';
import '../styles.css';
export type {TabsProps,TabItem} from '../../../../shared/tabs-view';
/** 読みやすい細い下線の文書タブ。 */
export default function PlainDocumentTabs({className='',...props}:TabsProps){return <TabsView {...props} className={`sop-plain-document-tabs ${className}`}/>;}
