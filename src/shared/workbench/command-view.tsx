'use client';
import React from 'react';
import {WorkbenchHost,type WorkbenchContainer} from './react-host';
import {createCommand,commandMarkup,type CommandOptions,type CommandState} from './command';
export interface CommandProps extends CommandOptions, WorkbenchContainer<CommandOptions,CommandState> {}
export function CommandView({skin,className,style,id,apiRef,...options}:CommandProps & {skin:string}) {
 return <WorkbenchHost kind="commands" skin={skin} options={options} create={createCommand} render={commandMarkup} className={className} style={style} id={id} apiRef={apiRef}/>;
}
