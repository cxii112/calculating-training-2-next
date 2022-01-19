import {ReactElement, ReactNode} from "react";

export default function SettingsMember(props: {
    children?: ReactNode
}) {
    return (
        <div className={"flex justify-between w-full"}>
            {props.children}
        </div>
    );
}