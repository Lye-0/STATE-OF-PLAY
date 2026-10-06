'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as FabricationWorkflowProps };
/** 現在の作業面と工程の小区画を、鋳型のような厚い縁で囲む。 */
export default function FabricationWorkflow(props: WizardProps) {
  return <WizardView {...props} skin="fabrication-workflow" />;
}
