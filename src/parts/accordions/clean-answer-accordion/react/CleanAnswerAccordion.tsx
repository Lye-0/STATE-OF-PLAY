'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 質問と本文を余白で区切る、説明ページ向けの基本アコーディオン。 */
export default function CleanAnswerAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-clean-answer-accordion ${className}`}/>;
}
