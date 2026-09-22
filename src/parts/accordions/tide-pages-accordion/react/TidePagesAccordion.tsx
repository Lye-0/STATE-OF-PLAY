'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 海の層と白い水平線。展開した情報の中にも水の透明感。 */
export default function TidePagesAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-tide-pages-accordion ${className}`}/>;
}
