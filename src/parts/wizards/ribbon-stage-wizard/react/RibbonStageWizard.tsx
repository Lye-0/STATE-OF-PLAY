'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as RibbonStageWizardProps };
/** 帯でつないだ工程札の下に内容を置く。 */
export default function RibbonStageWizard(props: WizardProps) {
  return <WizardView {...props} skin="ribbon-stage-wizard" />;
}
