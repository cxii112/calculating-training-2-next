import {ReactElement} from "react";

export default function SettingsWrapper(props:{
    children: ReactElement| ReactElement[],
    className?: string,
    title: string | ReactElement
}) {
    return(
        <div className={`space-y-2 ${props.className}`}>
            <div className={"flex justify-evenly text-2xl divide-slate-200"}>{props.title}</div>
            {props.children}
        </div>
    )
}