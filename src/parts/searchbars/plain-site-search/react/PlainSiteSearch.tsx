'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as PlainSiteSearchProps };
/** サイト内検索の標準的な構成。 */
export default function PlainSiteSearch(props:SearchProps) {
 return <SearchView {...props} skin="plain-site-search" />;
}
