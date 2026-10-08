'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as LetterpressStageWizardProps };
/** 受付の手続き票。上の工程欄、中央の記入欄、下の送信控えをミシン目で分離する。 */
export default function LetterpressStageWizard(props: WizardProps) {
  return <WizardView {...props} skin="letterpress-stage-wizard" />;
}
