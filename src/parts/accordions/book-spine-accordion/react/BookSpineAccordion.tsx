'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 冊子の背に並ぶ丸い番号から、章の内容を開く。 */
export default function BookSpineAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-book-spine-accordion ${className}`}/>;
}
