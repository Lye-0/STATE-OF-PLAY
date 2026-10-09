'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as InspectionCardContextProps };
/** 各行の白丸と丸い片端を廃止し、実状態glyphを一つの深い検査溝へ並べる。64pxの溝の片側に16pxの断面、反対側に20pxの開口を置き、実名称・説明・分類は連続した不透明な紙へ読む。checkedの実小面だけが溝を塞ぎ、普通のactionには偽のチェックを作らない。disabledも面を透過させず、native状態と文字色で区別する。 */
export default function InspectionCardContext(props:ContextProps) {
 return <ContextView {...props} skin="inspection-card-context" />;
}
