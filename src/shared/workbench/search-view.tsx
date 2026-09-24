'use client';
import React from 'react';
import {WorkbenchHost,type WorkbenchContainer} from './react-host';
import {createSearch,searchMarkup,type SearchOptions,type SearchState} from './search';
export interface SearchProps extends SearchOptions, WorkbenchContainer<SearchOptions,SearchState> {}
export function SearchView({skin,className,style,id,apiRef,...options}:SearchProps & {skin:string}) {
 return <WorkbenchHost kind="searchbars" skin={skin} options={options} create={createSearch} render={searchMarkup} className={className} style={style} id={id} apiRef={apiRef}/>;
}
