'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as CompactWizardProps };
/** 小さな面積でも迷わない、番号中心の手順。 */
export default function CompactWizard(props: WizardProps) {
  return <WizardView {...props} skin="compact-wizard" />;
}
