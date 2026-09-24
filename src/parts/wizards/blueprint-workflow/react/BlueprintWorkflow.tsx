'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as BlueprintWorkflowProps };
/** 直角の経路を順に結び、作業の流れを可視化する。 */
export default function BlueprintWorkflow(props: WizardProps) {
  return <WizardView {...props} skin="blueprint-workflow" />;
}
