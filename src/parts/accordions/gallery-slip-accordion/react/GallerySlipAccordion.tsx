'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 薄い展示札を透明な二つの押さえと下の受け溝へ差し込む開閉札。開くと押さえがわずかにゆるみ、広がる紙を下の金属の溝で保持する。見出しは展示用の書体で整理する。 */
export default function GallerySlipAccordion({className='',...props}:AccordionProps){
 return <AccordionView {...props} motionLayer={<span className="sop-acc-material" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>} className={`sop-gallery-slip-accordion ${className}`}/>;
}
