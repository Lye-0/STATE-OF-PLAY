'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 軽い上下の木桟と左端の経糸が本文の面を支える。下の小さな杼だけが開閉に合わせて動き、読む領域を額縁で圧迫しない。 */
export default function LoomBorderAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} motionLayer={<span className="sop-acc-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-loom-border-accordion ${className}`}/>;
}
