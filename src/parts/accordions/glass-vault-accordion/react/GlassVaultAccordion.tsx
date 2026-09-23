'use client';
import React from 'react';
import {UnfoldAccordionView} from '../../../../shared/unfold-accordion-view';
import type {AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 二枚のガラス扉が左右へ退き、内容が浮かび上がる。 */
export default function GlassVaultAccordion({className='',...props}:AccordionProps){
 return <UnfoldAccordionView {...props} mode="vault" className={`sop-glass-vault-accordion ${className}`}/>;
}
