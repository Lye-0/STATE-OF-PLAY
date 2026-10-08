'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 穏やかな紙色のヘルプ。番号とバッジを省き、質問・補足・開閉記号だけへ整理する。開いた本文は明るい一面と十分な行間で区切り、長い質問でも記号の領域を確保する。 */
export default function WarmHelpAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} motionLayer={<span className="sop-acc-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-warm-help-accordion ${className}`}/>;
}
