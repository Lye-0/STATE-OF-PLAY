'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as EditorialChaptersProps };
/** 大きな章番号と小さな目次。文字の階層で迷わず進む。 */
export default function EditorialChapters(props: WizardProps) {
  return <WizardView {...props} skin="editorial-chapters" />;
}
