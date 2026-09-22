import React,{useState} from 'react';
import MercurySegments,{type SegmentItem} from './MercurySegments';
// Stable values, not positional indices. Add/remove items here; layout is not fixed to 3.
const items:readonly SegmentItem[]=[
{value:"choice-1",label:"Eco"},
{value:"choice-2",label:"Auto"},
{value:"choice-3",label:"Boost"}
];
export default function Example(){const[value,setValue]=useState('choice-2');return <MercurySegments items={items} value={value} onValueChange={setValue} aria-label="Mercury Selector" name="displayMode"/>;}
