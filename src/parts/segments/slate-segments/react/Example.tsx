import React,{useState} from 'react';
import SlateSegments,{type SegmentItem} from './SlateSegments';
// Stable values, not positional indices. Add/remove items here; layout is not fixed to 3.
const items:readonly SegmentItem[]=[
{value:"choice-1",label:"自動",icon:(<svg viewBox="0 0 24 24"><path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z"/></svg>)},
{value:"choice-2",label:"明るい",icon:(<svg viewBox="0 0 24 24"><path d="m12 3 9 5-9 5-9-5zm-8 10 8 5 8-5M4 18l8 5 8-5"/></svg>)},
{value:"choice-3",label:"暗い",icon:(<svg viewBox="0 0 24 24"><path d="M5 4h14v16H5zM8 8h8M8 12h8M8 16h5"/></svg>)}
];
export default function Example(){const[value,setValue]=useState('choice-2');return <SlateSegments items={items} value={value} onValueChange={setValue} aria-label="Slate Segments" name="displayMode"/>;}
