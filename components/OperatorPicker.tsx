import {OperatorTab} from "../interfaces/OperatorTab";
import {Tab} from "@headlessui/react";

export default function OperatorPicker(props: {
    operators: OperatorTab[]
}) {

    return (
        <>
            <Tab.List className={"flex p-1 space-x-1 bg-slate-100 border border-slate-200 rounded-xl justify-evenly"}>
                {props.operators.map((tab) => (
                    <Tab
                        key={tab.id}
                        className={({selected}) => {
                            return "p-2.5 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-sky-500 ring-white ring-opacity-60" +
                                +" bg-slate-100 transition-colors ease-in-out duration-200 transition ease-in-out duration-200 " +
                                ` ${selected ? "border border-sky-500 text-sky-500" : "text-sky-500 hover:text-sky-500 text-slate-400"}`;
                        }}
                    >
                        {tab.icon}
                    </Tab>
                ))}
            </Tab.List>
        </>
    );
}