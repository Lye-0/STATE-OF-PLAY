'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as OpenPlanWizardProps };
/** 囲みを減らし工程の位置を線で示す。 */
export default function OpenPlanWizard(props: WizardProps) {
  return <WizardView {...props} skin="open-plan-wizard" />;
}
