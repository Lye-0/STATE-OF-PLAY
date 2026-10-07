'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 重い見出しの横に細い開口を設け、本文を静かな平面へ展開する。 */
export default function MonumentPanelAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-monument-panel-accordion ${className}`}/>;
}
