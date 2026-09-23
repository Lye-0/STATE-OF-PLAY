'use client';
import React from 'react';
import {UnfoldAccordionView} from '../../../../shared/unfold-accordion-view';
import type {AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 格子が立ち上がり、走査線が内容の輪郭を描く。 */
export default function BlueprintAccordion({className='',...props}:AccordionProps){
 return <UnfoldAccordionView {...props} mode="blueprint" className={`sop-blueprint-accordion ${className}`}/>;
}
