'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as FolioChapterWizardProps };
/** 章の背骨を工程の縦軸にする。 */
export default function FolioChapterWizard(props: WizardProps) {
  return <WizardView {...props} skin="folio-chapter-wizard" />;
}
