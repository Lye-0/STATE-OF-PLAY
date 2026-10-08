'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** レールに吊った見出しから本文が現れる。開いた項目の支点と内容を一本でつなぐ。 */
export default function MonumentPanelAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-monument-panel-accordion ${className}`}/>;
}
