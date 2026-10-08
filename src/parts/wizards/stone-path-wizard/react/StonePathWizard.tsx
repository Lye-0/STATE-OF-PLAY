'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as StonePathWizardProps };
/** 石の工程台。番号を浅いくぼみに置き、今操作する入力面だけを明るく広く確保する。 */
export default function StonePathWizard(props: WizardProps) {
  return <WizardView {...props} skin="stone-path-wizard" />;
}
