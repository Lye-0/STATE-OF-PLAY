'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 一体の金属ヘッドの暗い差込み口から、紙の本文を展開するスロット。左右の細いガイドが紙の端へつながり、上の切断面と口の厚みを別々に示す。 */
export default function MetalSlotAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} motionLayer={<span className="sop-acc-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-metal-slot-accordion ${className}`}/>;
}
