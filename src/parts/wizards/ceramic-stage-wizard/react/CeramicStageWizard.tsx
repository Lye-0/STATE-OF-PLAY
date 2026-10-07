'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as CeramicStageWizardProps };
/** 磁器の工程座と入力用の平面。 */
export default function CeramicStageWizard(props: WizardProps) {
  return <WizardView {...props} skin="ceramic-stage-wizard" />;
}
