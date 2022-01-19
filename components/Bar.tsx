import {ReactElement} from "react";

export default function Bar(props: {
    children?: ReactElement
}) {
    const classNames = {
        "wrapper": [
        ],
        "bar": [
            "tile",
            "notification",
            "is-dark",
            "py-3",
            "is-rounded",
        ]
    }
    return (
        <div className={classNames.wrapper.join(" ")}>
            <span className={classNames.bar.join(" ")}>{props.children}</span>
        </div>
    )
}