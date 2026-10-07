'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as PlainOnboardingWizardProps };
/** 一般的な初期設定の手順。 */
export default function PlainOnboardingWizard(props: WizardProps) {
  return <WizardView {...props} skin="plain-onboarding-wizard" />;
}
