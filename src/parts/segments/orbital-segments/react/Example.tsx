import React,{useState} from 'react';
import OrbitalSegments,{type SegmentItem} from './OrbitalSegments';
// Stable values, not positional indices. Add/remove items here; layout is not fixed to 3.
const items:readonly SegmentItem[]=[
{value:"choice-1",label:"Near"},
{value:"choice-2",label:"Orbit"},
{value:"choice-3",label:"Deep"}
];
export default function Example(){const[value,setValue]=useState('choice-2');return <OrbitalSegments items={items} value={value} onValueChange={setValue} aria-label="Orbital Selector" name="displayMode"/>;}
