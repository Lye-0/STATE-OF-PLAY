'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as BookendStageWizardProps };
/** 入力紙を左右の二つの大きい支持壁と一つの共通の足で保持する手順台。支持壁は全高を通じて内側へ曲がり、40pxの本当の側面で読む紙と接する。実戻る・次へは24pxの共通台の前面へ載り、小しおりと通常フォームの組合せを廃する。実章名は上の開いた紙面で14px、入力は支える紙の内側で読み、狭幅は支持壁22pxへ縮める。 */
export default function BookendStageWizard(props: WizardProps) {
  return <WizardView {...props} skin="bookend-stage-wizard" />;
}
