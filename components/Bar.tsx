import {ReactElement} from "react";
import styles from "../styles/Bar.module.scss"

export default function Bar(props: {
    children?: ReactElement
}) {
    const classNames = {
        "wrapper": [
            styles.wrapper,
        ],
        "bar": [
            styles.bar,
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