'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as StonePathWizardProps };
/** 石の足場を等間隔の工程にする。 */
export default function StonePathWizard(props: WizardProps) {
  return <WizardView {...props} skin="stone-path-wizard" />;
}
