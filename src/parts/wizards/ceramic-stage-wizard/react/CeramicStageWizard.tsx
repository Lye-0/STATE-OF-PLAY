'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as CeramicStageWizardProps };
/** 上下の二つの大きい肩と、内側へ絞る胴を一つの陶器の外形として作る。全高に沿う本当の輪郭が上・中央・下で変わり、小さな丸番号と角丸箱を廃する。実手順は上の縁、入力紙は胴の平底、操作は下の縁へ載り、字面は72pxの余白の中の平面で読む。狭幅では余白を32pxへ整え、native入力と48pxの操作を輪郭で切らない。 */
export default function CeramicStageWizard(props: WizardProps) {
  return <WizardView {...props} skin="ceramic-stage-wizard" />;
}
