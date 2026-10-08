'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as OpenPlanWizardProps };
/** 開いた作業台の手順。余計な枠を減らし、大きい見出し・現在の番号・次の操作を明確にする。 */
export default function OpenPlanWizard(props: WizardProps) {
  return <WizardView {...props} skin="open-plan-wizard" />;
}
