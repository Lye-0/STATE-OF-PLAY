'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as LgcSearchbarsMistProps };
/** 濃い霧ガラスに検索と候補一覧を収めた表示。 */
export default function LgcSearchbarsMist(props:SearchProps) {
 return <SearchView {...props} skin="lgc-searchbars-mist" className={`lgc-root ${props.className??''}`} />;
}
