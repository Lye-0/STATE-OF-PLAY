'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as ControlSequenceWizardProps };
/** 順序制御の三つの窓と操作面。 */
export default function ControlSequenceWizard(props: WizardProps) {
  return <WizardView {...props} skin="control-sequence-wizard" />;
}
