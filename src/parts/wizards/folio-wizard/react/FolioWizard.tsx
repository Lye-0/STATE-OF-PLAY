'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as FolioWizardProps };
/** 見出しタブと折り返しを持つ紙面が、工程と一緒に変わる。 */
export default function FolioWizard(props: WizardProps) {
  return <WizardView {...props} skin="folio-wizard" />;
}
