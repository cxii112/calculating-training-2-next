import SettingsMember from "./SettingsMember";
import StyledSwitch from "./StyledSwitch";
import {OperatorTab, TabOption} from "../interfaces/OperatorTab";
import SettingsWrapper from "./SettingsWrapper";

export default function DivideSettings() {
    return (
        <SettingsWrapper title={DivideTab.title}>
            <SettingsMember>
                <StyledSwitch
                    label={"Some label"}
                    defaultState={false}
                    onAction={(state) => {
                    }}/>
            </SettingsMember>
        </SettingsWrapper>
    );
}

export const DivideTab: OperatorTab = {
    id: 0,
    title: "Деление",
    value: TabOption.SUB,
    view: DivideSettings,
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
               stroke="currentColor"> {/** TODO edit svg to remove middle dot*/}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4 M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
    </svg>
};