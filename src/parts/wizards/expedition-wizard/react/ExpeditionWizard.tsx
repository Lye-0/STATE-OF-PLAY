'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as ExpeditionWizardProps };
/** 円形の行程計と、縦に並ぶ目的地をたどる。 */
export default function ExpeditionWizard(props: WizardProps) {
  return <WizardView {...props} skin="expedition-wizard" />;
}
