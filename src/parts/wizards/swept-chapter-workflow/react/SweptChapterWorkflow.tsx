'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as SweptChapterWorkflowProps };
/** 工程の番号を下へ揃え、章題の上を薄い選択面が移る。 */
export default function SweptChapterWorkflow(props: WizardProps) {
  return <WizardView {...props} skin="swept-chapter-workflow" />;
}
