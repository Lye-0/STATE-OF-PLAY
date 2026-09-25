'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as LgcWizardsLensProps };
/** 独立した光のレンズで手順を進めるウィザード。 */
export default function LgcWizardsLens(props: WizardProps) {
  return <WizardView {...props} skin="lgc-wizards-lens" className={`lgc-root ${props.className??''}`} />;
}
