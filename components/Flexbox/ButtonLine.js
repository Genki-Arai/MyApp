import React from "react";
import { TouchableOpacity } from "react-native";
import Calc from "./Calc";
import CalcButton from "./CalcButton";

export default function ButtonLine(props) {

    return (
        <React.Fragment>
            {props.buttons.map((button) => {
                return (
                    <CalcButton value={button.value} flex={button.flex} buttonEvent={button.buttonEvent} key={button.value} />
                );
            })}
        </React.Fragment>
    )
}