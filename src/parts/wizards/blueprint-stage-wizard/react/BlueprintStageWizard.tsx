'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as BlueprintStageWizardProps };
/** 設計工程を図面の区画で示す。 */
export default function BlueprintStageWizard(props: WizardProps) {
  return <WizardView {...props} skin="blueprint-stage-wizard" />;
}
