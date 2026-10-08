'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 縦の連続した蝶番から片側だけを開く台帳のゲート。上下の軸受が小さい表紙を保持し、紙の切断面を右へ露出する。濃紺の読む面は静止し、蝶番の扉だけが開いて本文を解放する。 */
export default function LedgerGateAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} motionLayer={<span className="sop-acc-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-ledger-gate-accordion ${className}`}/>;
}
