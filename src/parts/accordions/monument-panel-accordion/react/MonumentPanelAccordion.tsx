'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 磨いた石碑の正面へ本文を刻み、右に露出する切断面と下の台座で厚みを示す開閉面。開くと側面が現れ、見出しと読む面の位置は変わらない。 */
export default function MonumentPanelAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} motionLayer={<span className="sop-acc-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-monument-panel-accordion ${className}`}/>;
}
