'use client';
import React from 'react';
import {WorkbenchHost,type WorkbenchContainer} from './react-host';
import {createContextMenu,contextMarkup,type ContextOptions,type ContextState} from './context';
export interface ContextProps extends ContextOptions, WorkbenchContainer<ContextOptions,ContextState> {}
export function ContextView({skin,className,style,id,apiRef,...options}:ContextProps & {skin:string}) {
 return <WorkbenchHost kind="contextmenus" skin={skin} options={options} create={createContextMenu} render={contextMarkup} className={className} style={style} id={id} apiRef={apiRef}/>;
}
