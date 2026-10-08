'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** 票の左端全高を38px折り返し、四角い確認欄をその口へ接続するチェック。折面の上下の斜めの切口から本文の紙が露出し、外の10pxの受けがnative確認欄へ続く。中央のチェックと混在記号、文字とヒット領域は固定し、小さい折角だけの普通のカードにしない。 */
const FoldedTicketCheck=forwardRef<HTMLInputElement,CheckboxProps>(function FoldedTicketCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-folded-ticket-check ${className}`}/>;});
export default FoldedTicketCheck;
