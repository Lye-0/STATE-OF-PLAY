'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as RibbonStageWizardProps };
/** 上を走る帯に工程を留める。 */
export default function RibbonStageWizard(props: WizardProps) {
  return <WizardView {...props} skin="ribbon-stage-wizard" />;
}
