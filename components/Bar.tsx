import {ReactNode} from "react";

export default function Bar(props: {
    children?: ReactNode
}) {
    return (
        <div className={"bg-slate-100 px-4 py-2.5 flex justify-evenly rounded-lg w-full"}>
            <span className={""}>{props.children}</span>
        </div>
    );
}