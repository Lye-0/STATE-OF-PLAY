'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as BookendStageWizardProps };
/** 書見台の左右で工程と判断を支える。 */
export default function BookendStageWizard(props: WizardProps) {
  return <WizardView {...props} skin="bookend-stage-wizard" />;
}
