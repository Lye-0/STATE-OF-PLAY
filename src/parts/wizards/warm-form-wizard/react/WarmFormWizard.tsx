'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as WarmFormWizardProps };
/** 穏やかな紙色の複数手順フォーム。 */
export default function WarmFormWizard(props: WizardProps) {
  return <WizardView {...props} skin="warm-form-wizard" />;
}
