'use client';
import React from 'react';
import {UnfoldAccordionView} from '../../../../shared/unfold-accordion-view';
import type {AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 水の膜が引かれ、波紋が内容の縁へ広がる。 */
export default function TidePagesAccordion({className='',...props}:AccordionProps){
 return <UnfoldAccordionView {...props} mode="tide" className={`sop-tide-pages-accordion ${className}`}/>;
}
