'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as LedgerProcedureWizardProps };
/** 台帳の項目を一つずつ埋める。 */
export default function LedgerProcedureWizard(props: WizardProps) {
  return <WizardView {...props} skin="ledger-procedure-wizard" />;
}
