'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as OpenShelfSearchProps };
/** 棚のような開放的な検索と結果。 */
export default function OpenShelfSearch(props:SearchProps) {
 return <SearchView {...props} skin="open-shelf-search" />;
}
