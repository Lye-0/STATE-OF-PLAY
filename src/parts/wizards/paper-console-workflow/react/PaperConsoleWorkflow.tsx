'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as PaperConsoleWorkflowProps };
/** 横の細い工程帯と下の大きな入力面を、紙の操作盤として組む。 */
export default function PaperConsoleWorkflow(props: WizardProps) {
  return <WizardView {...props} skin="paper-console-workflow" />;
}
