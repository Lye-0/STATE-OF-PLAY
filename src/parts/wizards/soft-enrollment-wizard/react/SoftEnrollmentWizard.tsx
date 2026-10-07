'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as SoftEnrollmentWizardProps };
/** 申し込みに合う柔らかな入力面。 */
export default function SoftEnrollmentWizard(props: WizardProps) {
  return <WizardView {...props} skin="soft-enrollment-wizard" />;
}
