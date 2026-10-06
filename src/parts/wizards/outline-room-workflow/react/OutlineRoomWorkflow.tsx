'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as OutlineRoomWorkflowProps };
/** 工程の枠と入力の余白を分離し、現在の枠だけを二重線で示す。 */
export default function OutlineRoomWorkflow(props: WizardProps) {
  return <WizardView {...props} skin="outline-room-workflow" />;
}
