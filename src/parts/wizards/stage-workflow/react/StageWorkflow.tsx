'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as StageWorkflowProps };
/** 暗い面に小さなステージが現れ、進行に合わせて光が移る。 */
export default function StageWorkflow(props: WizardProps) {
  return <WizardView {...props} skin="stage-workflow" />;
}
