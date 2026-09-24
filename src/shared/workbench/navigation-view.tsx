'use client';
import React from 'react';
import {WorkbenchHost,type WorkbenchContainer} from './react-host';
import {createNavigation,navigationMarkup,type NavigationOptions,type NavigationState} from './navigation';
export interface NavigationProps extends NavigationOptions, WorkbenchContainer<NavigationOptions,NavigationState> {}
export function NavigationView({skin,className,style,id,apiRef,...options}:NavigationProps & {skin:string}) {
 return <WorkbenchHost kind="navigation" skin={skin} options={options} create={createNavigation} render={navigationMarkup} className={className} style={style} id={id} apiRef={apiRef}/>;
}
