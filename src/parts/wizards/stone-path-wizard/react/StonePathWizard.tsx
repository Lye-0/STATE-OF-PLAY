'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as StonePathWizardProps };
/** 小さな石段を順に進む。 */
export default function StonePathWizard(props: WizardProps) {
  return <WizardView {...props} skin="stone-path-wizard" />;
}
