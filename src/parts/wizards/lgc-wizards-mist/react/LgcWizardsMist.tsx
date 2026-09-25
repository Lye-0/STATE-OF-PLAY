'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as LgcWizardsMistProps };
/** 一枚の濃い霧ガラスに手順と入力を収めるウィザード。 */
export default function LgcWizardsMist(props: WizardProps) {
  return <WizardView {...props} skin="lgc-wizards-mist" className={`lgc-root ${props.className??''}`} />;
}
