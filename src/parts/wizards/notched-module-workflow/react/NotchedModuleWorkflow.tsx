'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as NotchedModuleWorkflowProps };
/** 切欠きのある工程面が、現在の作業区画へかみ合う。 */
export default function NotchedModuleWorkflow(props: WizardProps) {
  return <WizardView {...props} skin="notched-module-workflow" />;
}
