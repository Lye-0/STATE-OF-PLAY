'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as CompactSetupWizardProps };
/** 設定画面に収まるコンパクトな手順。 */
export default function CompactSetupWizard(props: WizardProps) {
  return <WizardView {...props} skin="compact-setup-wizard" />;
}
