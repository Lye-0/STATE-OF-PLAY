'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as FileJacketContextProps };
/** 資料ジャケットから開く操作票。表紙の左の綴じとメニューの操作列を対応させる。 */
export default function FileJacketContext(props:ContextProps) {
 return <ContextView {...props} skin="file-jacket-context" />;
}
