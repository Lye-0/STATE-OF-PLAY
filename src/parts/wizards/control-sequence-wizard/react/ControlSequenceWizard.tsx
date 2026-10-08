'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as ControlSequenceWizardProps };
/** 組立の工程レール。手順を縦の一覧、入力を隣の作業区画へ置き、狭幅では自然に上下へ戻す。 */
export default function ControlSequenceWizard(props: WizardProps) {
  return <WizardView {...props} skin="control-sequence-wizard" />;
}
