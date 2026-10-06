'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as PathColumnWorkflowProps };
/** 縦の工程柱と横の入力面を分け、現在の行で二つを結ぶ。 */
export default function PathColumnWorkflow(props: WizardProps) {
  return <WizardView {...props} skin="path-column-workflow" />;
}
