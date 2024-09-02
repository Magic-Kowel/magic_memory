import { useState, useEffect } from "react";
import normalizeText from "../tools/normalizeText";
import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import SnackbarCustom from "../components/SnackbarCustom";
import { randomEnglish } from "../tools/randomEnglish";
import Keyboard from "../components/Keyboard";
export default function WriteMemoryScreen({dataList}){
    const [text, setText] = useState("");
    const [randomIndex, setRandomIndex] = useState(0);
    const [visible, setVisible] = useState(false);
    const [isError, setIsError] = useState(false);
    const [lastWord, setLastWord] = useState("");
    const [isEnglish, setIsEnglish] = useState(true);
    const handleValidateENG = () => normalizeText(text.trim().toUpperCase()) === normalizeText(dataList[randomIndex].spanish.toUpperCase());
    const handleValidateESP = () => normalizeText(text.trim().toUpperCase()) === normalizeText(dataList[randomIndex].english.toUpperCase());
    const handleValidate = () => {
        const lenguageValidate = isEnglish ? handleValidateENG() : handleValidateESP();
        lenguageValidate ? setIsError(false) : setIsError(true)
        setVisible(true)
        handleRandom()
    }
    const handleRandom = () => {
        setLastWord(!isEnglish ? dataList[randomIndex].english : dataList[randomIndex].spanish)
        const index = Math.floor(Math.random() * dataList.length);
        setRandomIndex(index)
        setIsEnglish(randomEnglish())
        setText("");
    }
    useEffect(() => {
        handleRandom();
    }, [])
    return (
        <>

            <View
                style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: 9,
                    paddingHorizontal: "10%"
                }}
            >
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 3
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 30
                        }}>
                        Escribe la traducion
                    </Text>
                </View>
                <View
                    style={{ flex: 6, gap: 10 }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 30
                        }}>
                        {isEnglish ? dataList[randomIndex].english : dataList[randomIndex].spanish}
                    </Text>
                    <TextInput
                        label="Season"
                        type="outlined"
                        mode="outlined"
                        value={text}
                        onChangeText={text => setText(text)}
                        onSubmitEditing={handleValidate}
                    />
                </View>
                {/* <Keyboard /> */}
            </View>
            <SnackbarCustom
                visible={visible}
                setVisible={setVisible}
                isError={isError}
                text={lastWord}
            />
        </>
    )
}