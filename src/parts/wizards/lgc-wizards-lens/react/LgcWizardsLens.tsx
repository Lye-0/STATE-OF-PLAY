'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as LgcWizardsLensProps };
/** 通常の設定画面へ導入しやすい基本形。 */
export default function LgcWizardsLens(props: WizardProps) {
  return <WizardView {...props} skin="lgc-wizards-lens" className={`lgc-root ${props.className??''}`} />;
}
