import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { colors, fonts, screen } from "../../globalVariable";
import DatePicker from "react-native-datepicker";
import Picker from "react-native-picker-select";
import NumericInput from "react-native-numeric-input";
import { NewPill } from "./newPill.interface";
interface UpperPartprops {
  newPill: NewPill;
  setNewPill: React.Dispatch<React.SetStateAction<NewPill>>;
}
const UpperPart = ({ newPill, setNewPill }: UpperPartprops) => {
  const [text, setText] = useState<string>("");
  const [date, setDate] = useState(new Date());

  return (
    <View
      style={{
        flex: 0.5,
        backgroundColor: colors.surf_green,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          // paddingTop: screen.height * 0.1,
          marginHorizontal: 30,
          justifyContent: "space-evenly",
        }}
      >
        <View>
          <Text style={{ color: colors.whitey, fontSize: 18 }}>Pill name</Text>
          <TextInput
            placeholder="Put something here"
            onChangeText={(input) => {
              setNewPill({ ...newPill, name: input });
            }}
            value={newPill.name}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#f2f2e1",
              height: 50,
              padding: 5,
              color: "white",
            }}
          ></TextInput>
        </View>
        <View>
          <Text style={{ color: colors.whitey, fontSize: 18 }}>
            Quantity per time you take them (could be pills, spoons etc.)
          </Text>
          <TextInput
            placeholder="Put something here"
            onChangeText={(input) => {
              setNewPill({ ...newPill, quantity: input });
            }}
            value={newPill.quantity}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#f2f2e1",
              height: 50,
              padding: 5,
              color: "white",
            }}
          ></TextInput>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{ color: colors.whitey, fontSize: 18, marginBottom: 10 }}
              >
                Starting from when?
              </Text>
              <DatePicker
                placeholder={"select date"}
                minDate={new Date()}
                date={newPill.startingDate}
                confirmBtnText="Confirm"
                useNativeDriver={false}
                cancelBtnText="Cancel"
                customStyles={{
                  dateText: { color: colors.whitey },
                  // ... You can check the source to find the other keys.
                }}
                style={{ width: 200 }}
                onDateChange={(newDate) => {
                  setNewPill({ ...newPill, startingDate: newDate });
                }}
              ></DatePicker>
            </View>

            <View>
              <Text
                style={{ color: colors.whitey, fontSize: 18, marginBottom: 10 }}
              >
                How many days?
              </Text>
              <NumericInput
                onChange={(value) => {
                  setNewPill({ ...newPill, days: value });
                }}
                value={newPill.days}
                valueType="real"
                containerStyle={{ backgroundColor: colors.bone }}
                rounded={true}
                totalWidth={90}
                totalHeight={40}
                type="up-down"
                upDownButtonsBackgroundColor={colors.bone}
                iconStyle={{
                  //@ts-ignore

                  fontSize: 20,
                  color: colors.observatory,
                  alignSelf: "center",
                }}
                textColor={colors.observatory}
              ></NumericInput>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UpperPart;
