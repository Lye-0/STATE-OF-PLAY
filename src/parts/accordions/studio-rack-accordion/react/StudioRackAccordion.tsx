'use client';
import React from 'react';
import {UnfoldAccordionView} from '../../../../shared/unfold-accordion-view';
import type {AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** シャッターの羽根が起き上がり、ラックの内側が開く。 */
export default function StudioRackAccordion({className='',...props}:AccordionProps){
 return <UnfoldAccordionView {...props} mode="shutter" className={`sop-studio-rack-accordion ${className}`}/>;
}
