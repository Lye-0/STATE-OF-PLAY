'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 角を落とした金属のハッチを、右の二つの蝶番と左の回転留めで開閉する本文面。留めが軸から回って解除され、八角の枠とガスケットを読む面の外へ置く。 */
export default function HatchDividerAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} motionLayer={<span className="sop-acc-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-hatch-divider-accordion ${className}`}/>;
}
