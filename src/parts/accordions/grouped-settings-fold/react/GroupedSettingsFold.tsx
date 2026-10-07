'use client';
import React from 'react';
import {AccordionView,type AccordionProps} from '../../../../shared/accordion-view';
import '../styles.css';
export type {AccordionProps,AccordionItem} from '../../../../shared/accordion-view';
/** 同じ枠の中に項目を揃え、関連する設定のまとまりを示す。 */
export default function GroupedSettingsFold({className='',...props}:AccordionProps){
 return <AccordionView {...props} className={`sop-grouped-settings-fold ${className}`}/>;
}
