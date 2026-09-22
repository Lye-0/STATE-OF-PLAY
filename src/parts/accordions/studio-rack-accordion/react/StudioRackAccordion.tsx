'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** ラックマウント機器の溝と小さなメーター。音の設定が内側に続く。 */
export default function StudioRackAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-studio-rack-accordion ${className}`}/>;
}
