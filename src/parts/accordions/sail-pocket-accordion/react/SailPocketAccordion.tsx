'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 孔と細いロープで張った帆布のポケット。左の斜めのマチが本文とともに広がり、下の浅い弧と縫い線で布の袋を形作る。淡い帆布の読む面は動かさない。 */
export default function SailPocketAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} motionLayer={<span className="sop-acc-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-sail-pocket-accordion ${className}`}/>;
}
