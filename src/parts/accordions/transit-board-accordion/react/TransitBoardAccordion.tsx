'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 駅の案内板を思わせる見出し。経路や時刻まで一貫した情報設計。 */
export default function TransitBoardAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-transit-board-accordion ${className}`}/>;
}
