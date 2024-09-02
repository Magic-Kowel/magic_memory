import { Snackbar, Text, IconButton } from "react-native-paper";
import { View } from "react-native";
function SnackbarCustom({
    visible,
    setVisible,
    isError,
    text
}) {
    return (
        <Snackbar
            visible={visible}
            onDismiss={()=>{}}
            action={{
                label: !isError ? "Success" : "Wrong",
                onPress: () => {
                    setVisible(false)
                },
            }}
            style={{
                backgroundColor: isError ? 'red' : 'green'
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}
            >
                <IconButton
                    icon={isError ? "alert-circle" : "check-circle"}
                    color="white"
                    size={20}
                    style={{ marginRight: 8 }}
                />
                <Text style={{ color: 'white' }}>{text}</Text>
            </View>
        </Snackbar>
    )
}
export default SnackbarCustom;