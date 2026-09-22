'use client';
import React,{forwardRef} from 'react';
import {CheckboxView,type CheckboxProps} from '../../../../shared/checkbox-view';
import '../styles.css';
export type {CheckboxProps} from '../../../../shared/checkbox-view';
/** タスクを終えると文字にも印が残るリスト用UI。 */
const TaskCheck=forwardRef<HTMLInputElement,CheckboxProps>(function TaskCheck({className='',...props},ref){return <CheckboxView {...props} ref={ref} className={`sop-task-check ${className}`}/>;});
export default TaskCheck;
