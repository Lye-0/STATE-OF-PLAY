'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as CornerAnchorWorkflowProps };
/** 工程の札を角の固定具で支え、選んだ札が前へ浮く。 */
export default function CornerAnchorWorkflow(props: WizardProps) {
  return <WizardView {...props} skin="corner-anchor-workflow" />;
}
