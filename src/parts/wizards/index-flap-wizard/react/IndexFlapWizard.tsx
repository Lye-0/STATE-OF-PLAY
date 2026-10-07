'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as IndexFlapWizardProps };
/** 索引の頭を工程に、本文を入力に使う。 */
export default function IndexFlapWizard(props: WizardProps) {
  return <WizardView {...props} skin="index-flap-wizard" />;
}
