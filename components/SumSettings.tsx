import SettingsMember from "./SettingsMember";
import StyledSwitch from "./StyledSwitch";
import {OperatorTab, TabOption} from "../interfaces/OperatorTab";

export default function SumSettings() {
    return (
        <>
            <div className={"flex justify-evenly text-2xl mb-4"}>Сложение</div>
            <SettingsMember>
                <StyledSwitch
                    label={"Some label"}
                    defaultState={false}
                    onAction={(state) => {
                    }}/>
            </SettingsMember>
        </>
    );
}

export const SumTab: OperatorTab = {
    id: 0,
    title: "Сложение",
    value: TabOption.SUM,
    view: SumSettings,
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
    </svg>
};