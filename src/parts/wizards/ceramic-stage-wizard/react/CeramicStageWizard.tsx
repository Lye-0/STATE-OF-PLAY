'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as CeramicStageWizardProps };
/** 浅い陶器の縁を持つ入力面。 */
export default function CeramicStageWizard(props: WizardProps) {
  return <WizardView {...props} skin="ceramic-stage-wizard" />;
}
