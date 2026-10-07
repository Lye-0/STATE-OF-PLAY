'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as ControlSequenceWizardProps };
/** 操作盤の工程窓を順に選ぶ。 */
export default function ControlSequenceWizard(props: WizardProps) {
  return <WizardView {...props} skin="control-sequence-wizard" />;
}
