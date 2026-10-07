'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as OpenPlanWizardProps };
/** 余白と括弧で手順を分ける。 */
export default function OpenPlanWizard(props: WizardProps) {
  return <WizardView {...props} skin="open-plan-wizard" />;
}
