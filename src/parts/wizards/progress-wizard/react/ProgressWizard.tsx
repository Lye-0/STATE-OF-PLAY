'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as ProgressWizardProps };
/** 工程を割合としても把握できる。 */
export default function ProgressWizard(props: WizardProps) {
  return <WizardView {...props} skin="progress-wizard" />;
}
