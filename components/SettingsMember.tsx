import {ReactElement} from "react";

export default function SettingsMember(props: {
    children?: ReactElement | ReactElement[],
    className?: string
}) {
    return (
        <div className={`flex justify-between w-full ${props.className}`}>
            {props.children}
        </div>
    );
}