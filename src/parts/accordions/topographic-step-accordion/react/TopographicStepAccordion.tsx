'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 一体の岩の稜から本文の露頭を開く断面。粗い左の切断面と下の岩の橋が本文を支え、開く量に沿って露頭と測深線が伸びる。小さい測深片だけが下がり、見出しは動かさない。 */
export default function TopographicStepAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} motionLayer={<span className="sop-acc-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-topographic-step-accordion ${className}`}/>;
}
