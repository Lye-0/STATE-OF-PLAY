'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 淡い磁器の一枚の縁と、少し凹んだ読む面を重ねる。右と下の切断端に厚みを集め、反射と多重枠を抑える。 */
export default function RecessStackAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} motionLayer={<span className="sop-acc-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-recess-stack-accordion ${className}`}/>;
}
