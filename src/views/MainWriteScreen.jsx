import React from "react";
import WriteMemoryScreen from "./WriteMemoryScreen"
import { strategies } from "../tools/strategies";

export default function MainWriteScreen({ route }) {
    const { listType } = route.params;
    const strategy = strategies[listType] || [] ;
    return <WriteMemoryScreen dataList={strategy} />;
}