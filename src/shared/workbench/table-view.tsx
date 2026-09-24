'use client';
import React from 'react';
import {WorkbenchHost,type WorkbenchContainer} from './react-host';
import {createDataTable,tableMarkup,type TableOptions,type TableState} from './table';
export interface TableProps extends TableOptions, WorkbenchContainer<TableOptions,TableState> {}
export function TableView({skin,className,style,id,apiRef,...options}:TableProps & {skin:string}) {
 return <WorkbenchHost kind="tables" skin={skin} options={options} create={createDataTable} render={tableMarkup} className={className} style={style} id={id} apiRef={apiRef}/>;
}
