'use client';
import React from 'react';
import {flushSync} from 'react-dom';
import {WorkbenchHost,type WorkbenchContainer} from './react-host';
import {createSearch,searchMarkup,type SearchOptions,type SearchState} from './search';
export interface SearchProps extends SearchOptions, WorkbenchContainer<SearchOptions,SearchState> {}
export function SearchView({skin,className,style,id,apiRef,...options}:SearchProps & {skin:string}) {
 // Native input listeners run outside React's event bridge. Commit accepted
 // controlled values before the controller paints, preserving the editor's undo.
 const onQueryChange=options.onQueryChange;
 const boundOptions=options.query!==undefined&&onQueryChange?{...options,onQueryChange:(query:string)=>flushSync(()=>onQueryChange(query))}:options;
 return <WorkbenchHost kind="searchbars" skin={skin} options={boundOptions} create={createSearch} render={searchMarkup} className={className} style={style} id={id} apiRef={apiRef}/>;
}
