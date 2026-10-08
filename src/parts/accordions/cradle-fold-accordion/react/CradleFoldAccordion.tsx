'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 開いた角を接続して本文の読む領域をつくる。閉じた時は見出しの支点だけを残す。 */
export default function CradleFoldAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-cradle-fold-accordion ${className}`}/>;
}
