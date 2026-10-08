'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 上の綴じ棒をまたぐ麻布の番号タブ。折り返しと両側の縫い目、燕尾の下端を番号専用の列へまとめ、本文を隣の紙へ置く。展開時は布の端だけがゆるみ、番号と見出しは固定する。 */
export default function LinenTabAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} motionLayer={<span className="sop-acc-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-linen-tab-accordion ${className}`}/>;
}
