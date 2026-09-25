'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as LgcWizardsMistProps };
/** 丸い選択面で現在の工程を示す。 */
export default function LgcWizardsMist(props: WizardProps) {
  return <WizardView {...props} skin="lgc-wizards-mist" className={`lgc-root ${props.className??''}`} />;
}
