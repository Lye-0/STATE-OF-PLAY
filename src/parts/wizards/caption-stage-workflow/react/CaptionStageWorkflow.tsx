'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as CaptionStageWorkflowProps };
/** 大きな工程番号の下に短い章題を置き、現在の入力内容を区切る。 */
export default function CaptionStageWorkflow(props: WizardProps) {
  return <WizardView {...props} skin="caption-stage-workflow" />;
}
