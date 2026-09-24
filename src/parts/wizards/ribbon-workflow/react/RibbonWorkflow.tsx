'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as RibbonWorkflowProps };
/** 折り返す一本の帯が、工程をつなぐ。 */
export default function RibbonWorkflow(props: WizardProps) {
  return <WizardView {...props} skin="ribbon-workflow" />;
}
