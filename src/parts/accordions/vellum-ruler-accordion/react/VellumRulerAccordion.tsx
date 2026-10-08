'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 紙の左を測る定規と、下の紙端へつながる直角の読取り止め。本文が展開すると定規の目盛りが伸び、止めが紙の下端とともに下がる。上の孔と下の顎を同じ定規へつなぎ、読む紙は固定する。 */
export default function VellumRulerAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} motionLayer={<span className="sop-acc-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-vellum-ruler-accordion ${className}`}/>;
}
