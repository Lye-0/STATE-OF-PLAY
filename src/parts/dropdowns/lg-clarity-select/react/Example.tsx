import React,{useState} from 'react';
import ClaritySelect from './ClaritySelect';
const items=[{"value": "updated", "label": "更新日時", "description": "最後に更新された順"}, {"value": "name", "label": "名前順", "description": "名前で並べ替える"}, {"value": "created", "label": "追加した順", "description": "新しく追加したものから"}, {"value": "size", "label": "サイズ順", "description": "大きいものから"}];
export default function Example(){const [sort,setSort]=useState('updated');return <ClaritySelect items={items} value={sort} onValueChange={setSort} label="並び順" name="sort"/>;}
