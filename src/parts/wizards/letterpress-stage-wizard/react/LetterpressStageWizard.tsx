'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as LetterpressStageWizardProps };
/** 活版の番号と見出しで進む。 */
export default function LetterpressStageWizard(props: WizardProps) {
  return <WizardView {...props} skin="letterpress-stage-wizard" />;
}
