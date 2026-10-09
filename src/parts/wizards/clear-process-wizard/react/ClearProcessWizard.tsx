'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as ClearProcessWizardProps };
/** 工程を短いチェックリストとして読むウィザード。各工程の位置を縦に揃え、現在の入力内容をその下の白い欄で扱う。 */
export default function ClearProcessWizard(props: WizardProps) {
  return <WizardView {...props} skin="clear-process-wizard" />;
}
