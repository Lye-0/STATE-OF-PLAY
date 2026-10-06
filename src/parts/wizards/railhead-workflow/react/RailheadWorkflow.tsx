'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as RailheadWorkflowProps };
/** 現在の工程を大きな先頭印で示し、残りの工程を小さな案内列へ置く。 */
export default function RailheadWorkflow(props: WizardProps) {
  return <WizardView {...props} skin="railhead-workflow" />;
}
