'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as LgcSearchbarsLensProps };
/** 透明な検索レンズと独立した候補面。 */
export default function LgcSearchbarsLens(props:SearchProps) {
 return <SearchView {...props} skin="lgc-searchbars-lens" className={`lgc-root ${props.className??''}`} />;
}
