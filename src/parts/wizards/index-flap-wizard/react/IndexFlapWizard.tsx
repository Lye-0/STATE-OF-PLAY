'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as IndexFlapWizardProps };
/** 索引札をめくりながら入力する。 */
export default function IndexFlapWizard(props: WizardProps) {
  return <WizardView {...props} skin="index-flap-wizard" />;
}
