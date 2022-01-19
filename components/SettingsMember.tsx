import {ReactElement} from "react";

export default function SettingsMember(props: {
    children?: ReactElement
}) {
    return (
        <div className={"flex justify-between w-full"}>
            {props.children}
        </div>
    );
}