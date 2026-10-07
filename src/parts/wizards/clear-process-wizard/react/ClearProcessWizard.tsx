'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as ClearProcessWizardProps };
/** 線を主体に手順と入力面を分ける。 */
export default function ClearProcessWizard(props: WizardProps) {
  return <WizardView {...props} skin="clear-process-wizard" />;
}
