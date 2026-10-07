'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 短い見出しを連続させる、設定画面向けの小型開閉欄。 */
export default function CompactDisclosure({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-compact-disclosure ${className}`}/>;
}
