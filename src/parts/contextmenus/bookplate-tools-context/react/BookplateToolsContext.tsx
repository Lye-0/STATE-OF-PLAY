'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as BookplateToolsContextProps };
/** 実対象名を全幅の横胴に、実分類の操作を28pxの一体の側材から直接続く広い読む枝に置く。分類・区切りに対応する24pxの深い切込みだけで一枚の選別櫛を作り、別カードや斜めの橋を足さない。実階層が一群なら切込みを作らず一面へ戻し、偽の枝も分類名も作らない。 */
export default function BookplateToolsContext(props:ContextProps) {
 return <ContextView {...props} skin="bookplate-tools-context" />;
}
