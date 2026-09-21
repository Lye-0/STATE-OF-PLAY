'use client';
import { useEffect, useRef, useState, type ButtonHTMLAttributes } from 'react';
import { createToggleController, type ToggleConfig, type ToggleController } from './toggle-controller';
export interface ToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'children' | 'defaultChecked'> {
    checked?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
}
/** React owns the committed state/ARIA; the controller owns only transient artwork values. */
export function useToggle(config: ToggleConfig, props: ToggleProps) {
    const [internal, setInternal] = useState(props.defaultChecked ?? config.initial);
    const checked = props.checked ?? internal;
    const element = useRef<HTMLButtonElement | null>(null);
    const control = useRef<ToggleController | null>(null);
    const latest = useRef(props);
    latest.current = props;
    const initial = useRef(checked);
    useEffect(() => {
        const button = element.current;
        if (!button)
            return;
        const controller = createToggleController(button, config, {
            checked: initial.current, controlled: true, manageAria: false,
            onCheckedChange(next) {
                if (latest.current.checked === undefined)
                    setInternal(next);
                latest.current.onCheckedChange?.(next);
            }
        });
        control.current = controller;
        return () => { controller.destroy(); control.current = null; };
    }, [config]);
    useEffect(() => { control.current?.setChecked(checked); }, [checked]);
    useEffect(() => { if (props.disabled)
        control.current?.cancelInteraction(); }, [props.disabled]);
    return { element, checked };
}
