import { RadioGroup } from "@headlessui/react";

export default function StyledRadioGroup(props:{
    selected:string
})
{
    return(
        <>
            <RadioGroup value={props.selected}>

            </RadioGroup>
        </>
    )
}