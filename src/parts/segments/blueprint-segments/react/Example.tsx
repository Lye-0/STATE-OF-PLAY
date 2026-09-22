import React,{useState} from 'react';
import BlueprintSegments,{type SegmentItem} from './BlueprintSegments';
// Stable values, not positional indices. Add/remove items here; layout is not fixed to 3.
const items:readonly SegmentItem[]=[
{value:"choice-1",label:"Draft"},
{value:"choice-2",label:"Review"},
{value:"choice-3",label:"Final"}
];
export default function Example(){const[value,setValue]=useState('choice-2');return <BlueprintSegments items={items} value={value} onValueChange={setValue} aria-label="Blueprint Selector" name="displayMode"/>;}
