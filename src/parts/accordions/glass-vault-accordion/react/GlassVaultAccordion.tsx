'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 曇りガラスの層に情報を収める。内側にも反射と奥行きを。 */
export default function GlassVaultAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-glass-vault-accordion ${className}`}/>;
}
