'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as FolioChapterWizardProps };
/** 冊子の章を順番に開く。 */
export default function FolioChapterWizard(props: WizardProps) {
  return <WizardView {...props} skin="folio-chapter-wizard" />;
}
