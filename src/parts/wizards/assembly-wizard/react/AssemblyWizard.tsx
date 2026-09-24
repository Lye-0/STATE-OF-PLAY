'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as AssemblyWizardProps };
/** 斜めのパネルがつながり、現在の工程が一段浮き上がる。 */
export default function AssemblyWizard(props: WizardProps) {
  return <WizardView {...props} skin="assembly-wizard" />;
}
