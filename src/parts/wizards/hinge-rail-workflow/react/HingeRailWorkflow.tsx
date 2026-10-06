'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as HingeRailWorkflowProps };
/** 左の支点列と右の作業面を結び、工程の切替を小さなレールで示す。 */
export default function HingeRailWorkflow(props: WizardProps) {
  return <WizardView {...props} skin="hinge-rail-workflow" />;
}
