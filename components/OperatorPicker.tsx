import {OperatorTab} from "../interfaces/OperatorTab";
import {Tab} from "@headlessui/react";

export default function OperatorPicker(props:{
    operators:OperatorTab[]
}) {
    return (
        <>
            <Tab.List>
                {props.operators.map((tab) => (
                    <Tab
                        key={tab.id}>
                        {tab.icon}</Tab>
                ))}
            </Tab.List>
        </>
    );
}