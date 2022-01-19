import SettingsMember from "./SettingsMember";
import StyledSwitch from "./StyledSwitch";

export default function SumSettings() {
    return (
        <>
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