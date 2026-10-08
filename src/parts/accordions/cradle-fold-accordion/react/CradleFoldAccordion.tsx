'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 一枚の読む台を二つの斜めに折った足で受ける開閉面。本文を開くと足の折り面が広がり、上の台と地面の小さな接点をつなぐ。読む面は水平に保つ。 */
export default function CradleFoldAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} motionLayer={<span className="sop-acc-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-cradle-fold-accordion ${className}`}/>;
}
