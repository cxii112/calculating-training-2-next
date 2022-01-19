import {Tab} from "@headlessui/react";
import {SumTab} from "./SumSettings";
import {OperatorTab} from "../interfaces/OperatorTab";
import {SubtractTab} from "./SubtractSettings";

export default function OperatorPicker() {
    const operatorList: OperatorTab[] = [
        SumTab,
        SubtractTab,
    ];
    return (
        <>
            <Tab.Group>
                <Tab.List>
                    {operatorList.map((tab) => (
                        <Tab
                            key={tab.id}>
                            {tab.icon}</Tab>
                    ))}
                </Tab.List>
                <Tab.Panels>
                    {operatorList.map((tab) => (
                        <Tab.Panel
                            key={tab.id}>
                            {tab.view}
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </>
    );
}