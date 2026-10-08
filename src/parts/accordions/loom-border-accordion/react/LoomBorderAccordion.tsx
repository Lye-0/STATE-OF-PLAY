'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 独立した上下の織り止めへ縦糸を渡す開閉織機。本文の高さに沿って糸を張り、下の隙間を杼だけが横へ進む。杼の穴へ横糸を通し、読む面は固定する。 */
export default function LoomBorderAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} motionLayer={<span className="sop-acc-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-loom-border-accordion ${className}`}/>;
}
