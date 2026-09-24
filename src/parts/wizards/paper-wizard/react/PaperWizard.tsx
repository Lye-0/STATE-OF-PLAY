'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as PaperWizardProps };
/** 白いフォームに合わせた、静かな手順UI。 */
export default function PaperWizard(props: WizardProps) {
  return <WizardView {...props} skin="paper-wizard" />;
}
