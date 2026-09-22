import React,{useState} from 'react';
import AtlasSegments,{type SegmentItem} from './AtlasSegments';
// Stable values, not positional indices. Add/remove items here; layout is not fixed to 3.
const items:readonly SegmentItem[]=[
{value:"choice-1",label:"Read"},
{value:"choice-2",label:"Write"},
{value:"choice-3",label:"Create"}
];
export default function Example(){const[value,setValue]=useState('choice-2');return <AtlasSegments items={items} value={value} onValueChange={setValue} aria-label="Atlas Selector" name="displayMode"/>;}
