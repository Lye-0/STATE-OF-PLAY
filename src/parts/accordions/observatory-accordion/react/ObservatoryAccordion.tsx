'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 夜空の下で読む観測データ。軌道図と数値が静かに浮かぶ。 */
export default function ObservatoryAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-observatory-accordion ${className}`}/>;
}
