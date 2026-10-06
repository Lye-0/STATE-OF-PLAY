'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as SwingBoardWorkflowProps };
/** 工程の面を上の軸から吊り、現在の面だけをまっすぐに読む。 */
export default function SwingBoardWorkflow(props: WizardProps) {
  return <WizardView {...props} skin="swing-board-workflow" />;
}
