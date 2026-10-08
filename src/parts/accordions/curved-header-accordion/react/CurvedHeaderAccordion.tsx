'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 両端の丸い巻き口へつながる湾曲した見出しの庇。淡い藤色の庇の下から本文を下ろし、側面の細い巻き面だけを伸ばす。庇と巻き口の断面で曲率を示し、文字面には光の筋を走らせない。 */
export default function CurvedHeaderAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} motionLayer={<span className="sop-acc-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-curved-header-accordion ${className}`}/>;
}
