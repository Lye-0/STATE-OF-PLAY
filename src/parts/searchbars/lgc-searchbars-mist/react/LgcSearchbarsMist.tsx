'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as LgcSearchbarsMistProps };
/** 日常の検索に合わせやすい、読みやすい入力とフィルター。 */
export default function LgcSearchbarsMist(props:SearchProps) {
 return <SearchView {...props} skin="lgc-searchbars-mist" className={`lgc-root ${props.className??''}`} />;
}
