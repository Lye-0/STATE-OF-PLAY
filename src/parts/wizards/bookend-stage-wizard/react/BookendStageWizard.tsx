'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as BookendStageWizardProps };
/** 上下の台座で入力面を支える。 */
export default function BookendStageWizard(props: WizardProps) {
  return <WizardView {...props} skin="bookend-stage-wizard" />;
}
