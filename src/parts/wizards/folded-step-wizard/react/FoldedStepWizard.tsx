'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as FoldedStepWizardProps };
/** 折り畳む手順票。上の折り返しを進行表示にし、中央の入力面を平らに保って操作する。 */
export default function FoldedStepWizard(props: WizardProps) {
  return <WizardView {...props} skin="folded-step-wizard" />;
}
