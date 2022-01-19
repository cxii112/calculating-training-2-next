import {OperatorTab} from "../interfaces/OperatorTab";
import {Tab} from "@headlessui/react";

export default function SettingsPicker(props: {
    operators: OperatorTab[],
}) {
    return (
        <>
            <Tab.Panels>
                {props.operators.map((tab) => (
                    <Tab.Panel
                        key={tab.id}>
                        {tab.view}
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </>
    );
}