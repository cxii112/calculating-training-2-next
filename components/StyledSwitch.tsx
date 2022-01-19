import {Switch} from "@headlessui/react";
import {useCallback, useState} from "react";

export default function StyledSwitch(props: {
    label: string,
    defaultState: boolean
    onAction: (state: boolean) => void,
}) {
    const [isChecked, setIsChecked] = useState<boolean>(props.defaultState);
    useCallback(() => {
        props.onAction(isChecked);
    }, [isChecked]);
    return (
        <>
            <Switch.Group>
                <Switch.Label className={`${isChecked ? "text-black" : "text-slate-500"}
                                          text-xl transition ease-in-out duration-200`}>
                    {props.label}</Switch.Label>
                <Switch
                    checked={isChecked}
                    onChange={setIsChecked}
                    className={`${isChecked ? "bg-sky-500" : "bg-slate-200"}
                    p-0 relative flex h-6.5 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
                    {/* TODO add sr-only span*/}
                    <span
                        aria-hidden="true"
                        className={`${isChecked ? "translate-x-5" : "translate-x-0"}
                        text-2xl
                        pointer-events-none inline-block h-6 aspect-square rounded-full bg-slate-100 shadow-lg transform ring-0 transition ease-in-out duration-200`}/>
                </Switch>
            </Switch.Group>
        </>
    );
}