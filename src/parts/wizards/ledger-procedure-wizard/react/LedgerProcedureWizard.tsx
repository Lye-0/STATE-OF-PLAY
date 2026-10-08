'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as LedgerProcedureWizardProps };
/** 申請の帳簿。手順番号と名称を同じ欄へ揃え、入力は罫線のある明瞭な記入区画にする。 */
export default function LedgerProcedureWizard(props: WizardProps) {
  return <WizardView {...props} skin="ledger-procedure-wizard" />;
}
