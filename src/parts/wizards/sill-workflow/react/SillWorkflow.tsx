'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as SillWorkflowProps };
/** 工程の札を低い窓台に置き、現在の工程だけを前へ引き出す。 */
export default function SillWorkflow(props: WizardProps) {
  return <WizardView {...props} skin="sill-workflow" />;
}
