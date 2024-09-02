import { View, Button, StyleSheet } from "react-native";

function Keyboard() {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          display: "flex",
          flex: 0.8,
          columnGap: 2,
        }}
      >
        <View style={{ width: 35 }}>
          <Button title="Q" />
        </View>
        <View style={{ width: 35 }}>
          <Button title="W" />
        </View>
        <View style={{ width: 35 }}>
          <Button title="E" />
        </View>
        <View style={{ width: 35 }}>
          <Button title="R" />
        </View>
        <View style={{ width: 35 }}>
          <Button title="T" />
        </View>
        <View style={{ width: 35 }}>
          <Button title="Y" />
        </View>
        <View style={{ width: 35 }}>
          <Button title="U" />
        </View>
        <View style={{ width: 35 }}>
          <Button title="I" />
        </View>
        <View style={{ width: 35 }}>
          <Button title="O" />
        </View>
        <View style={{ width: 35 }}>
          <Button title="P" />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          display: "flex",
          flex: 0.8,
          columnGap: 2,
        }}
      >
        <View style={{ width: 35 }}>
          <Button title="A" />
        </View>
        <View style={{ width: 35 }}>
          <Button title="S" />
        </View>
        <View style={{ width: 35 }}>
          <Button title="D" />
        </View>
        <View style={{ width: 35 }}>
          <Button title="F" />
        </View>
        <View style={{ width: 35 }}>
          <Button title="G" />
        </View>
        <View style={{ width: 35 }}>
          <Button title="H" />
        </View>
        <View style={{ width: 35 }}>
          <Button title="J" />
        </View>
        <View style={{ width: 35 }}>
          <Button title="K" />
        </View>
        <View style={{ width: 35 }}>
          <Button title="L" />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          display: "flex",
          flex: 0.8,
          columnGap: 2,
        }}
      >
        <View style={{ width: 35 }}>
          <Button title="Z" />
        </View>
        <View style={{ width: 35 }}>
          <Button title="X" />
        </View>
        <View style={{ width: 35 }}>
          <Button title="C" />
        </View>
        <View style={{ width: 35 }}>
          <Button title="V" />
        </View>
        <View style={{ width: 35 }}>
          <Button title="B" />
        </View>
        <View style={{ width: 35 }}>
          <Button title="N" />
        </View>
        <View style={{ width: 35 }}>
          <Button title="M" />
        </View>
        <View style={{ width: 45 }}>
          <Button title="<--" />
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        <Button title="COMPROBAR" style={{ flex: 4 }} />
      </View>
    </>
  );
}
export default Keyboard;
