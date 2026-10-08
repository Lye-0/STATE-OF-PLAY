'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 六枚の折り面が書類の左のマチを作るガセット綴じ。本文の展開に合わせて各面が広がり、上端と下端の折山が紙の奥行きを示す。本文と見出しは固定した紙面へ置く。 */
export default function GussetFileAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} motionLayer={<span className="sop-acc-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-gusset-file-accordion ${className}`}/>;
}
