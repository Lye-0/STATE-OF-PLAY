'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as BlueprintStageWizardProps };
/** 作業図の工程と記入線を整列。 */
export default function BlueprintStageWizard(props: WizardProps) {
  return <WizardView {...props} skin="blueprint-stage-wizard" />;
}
