'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as WarmFormWizardProps };
/** 番号と明朝の見出しで章を読むウィザード。入力欄は帳票の下線に沿わせ、上下の二重罫で書類のまとまりを作る。 */
export default function WarmFormWizard(props: WizardProps) {
  return <WizardView {...props} skin="warm-form-wizard" />;
}
