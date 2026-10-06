'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 斜めの折り目をもつ厚い紙が、章ごとに奥行きを変える。 */
export default function ConcertinaAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-concertina-accordion ${className}`}/>;
}
