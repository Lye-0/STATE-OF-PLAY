'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as SoftEnrollmentWizardProps };
/** 一つずつ入力して進む申し込み向けウィザード。短い工程表示、白い入力面、広い次へボタンで操作の順序を明確にする。 */
export default function SoftEnrollmentWizard(props: WizardProps) {
  return <WizardView {...props} skin="soft-enrollment-wizard" />;
}
