'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as VerticalWizardProps };
/** 縦の目次で工程を見渡せる。 */
export default function VerticalWizard(props: WizardProps) {
  return <WizardView {...props} skin="vertical-wizard" />;
}
