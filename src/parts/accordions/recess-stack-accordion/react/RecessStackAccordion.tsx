'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 削った左の切欠きと厚い右の内壁を持つ、非対称の陶器の凹み。本文は同じ受け皿の浅い底へ展開し、右の釉薬の面が本文の高さに沿って露出する。丸い枠を重ねず、外壁と内底の二つの材質で深さを分ける。 */
export default function RecessStackAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} motionLayer={<span className="sop-acc-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-recess-stack-accordion ${className}`}/>;
}
