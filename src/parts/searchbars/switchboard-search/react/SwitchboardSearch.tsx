'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as SwitchboardSearchProps };
/** 押し込むキーと切替タブを持つ、精密機器の検索モジュール。 */
export default function SwitchboardSearch(props:SearchProps) {
 return <SearchView {...props} skin="switchboard-search" />;
}
