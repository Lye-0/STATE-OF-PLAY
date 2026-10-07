'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as LetterpressStageWizardProps };
/** 活版の工程番号から記入面へ導く。 */
export default function LetterpressStageWizard(props: WizardProps) {
  return <WizardView {...props} skin="letterpress-stage-wizard" />;
}
