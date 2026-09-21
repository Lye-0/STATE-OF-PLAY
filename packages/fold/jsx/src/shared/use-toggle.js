'use client';
import { useEffect, useRef, useState } from 'react';
import { createToggleController } from './toggle-controller';
/** React owns the committed state/ARIA; the controller owns only transient artwork values. */
export function useToggle(config, props) {
    const [internal, setInternal] = useState(props.defaultChecked ?? config.initial);
    const checked = props.checked ?? internal;
    const element = useRef(null);
    const control = useRef(null);
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
    useEffect(() => {
        if (props.disabled)
            control.current?.cancelInteraction();
    }, [props.disabled]);
    return { element, checked };
}
