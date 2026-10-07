'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as FoldedStepWizardProps };
/** 折り返したタブに手順を置く。 */
export default function FoldedStepWizard(props: WizardProps) {
  return <WizardView {...props} skin="folded-step-wizard" />;
}
