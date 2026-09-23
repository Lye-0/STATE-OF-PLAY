'use client';
import React from 'react';
import {UnfoldAccordionView} from '../../../../shared/unfold-accordion-view';
import type {AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 光の幕が引き上がり、透明な面の奥から内容が現れる。 */
export default function AuroraFoldAccordion({className='',...props}:AccordionProps){
 return <UnfoldAccordionView {...props} mode="aurora" className={`sop-aurora-fold-accordion ${className}`}/>;
}
