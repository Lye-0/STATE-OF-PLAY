'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as LedgerProcedureWizardProps };
/** 実章の一枚の前面が、下の56pxの連続曲面を回り、現在の入力紙の背面へ入る巻帳。上側だけに一つの大きい巻き返しを持ち、入力紙はその曲面へ16px重なって自由端へ伸びる。実戻る・次へは同じ紙の自由端に置き、下の独立した丸いキャップは廃する。曲面の両端12pxの小口と明るい上の8pxの面を露出し、nativeの実章→入力→操作の一枚の紙の順序を読む。 */
export default function LedgerProcedureWizard(props: WizardProps) {
  return <WizardView {...props} skin="ledger-procedure-wizard" />;
}
