'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as SwitchRegisterSearchProps };
/** 検索語と実行ボタンを分け、対象の選択を短い登録列にまとめる。 */
export default function SwitchRegisterSearch(props:SearchProps) {
 return <SearchView {...props} skin="switch-register-search" />;
}
