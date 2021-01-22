import React from "react";
import { View, Text } from "react-native";
import { colors, fonts, screen } from "../../globalVariable";
import { ProgressChart } from "react-native-chart-kit";
import { PillsInterface } from "../../pills.interface";

const Header = ({ pills }: { pills: PillsInterface[] }) => {
  let pillsTakenCount: number = 0;
  if (pills.length) {
    pillsTakenCount = pills.reduce((acum, currVal) => {
      if (currVal.taken) return acum + 1;
      else return acum;
    }, 0);
  }

  return (
    <View
      style={{
        marginBottom: 10,
        width: "100%",
        paddingTop: screen.height * 0.15,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <ProgressChart
        data={[pills.length && pillsTakenCount / pills.length]}
        width={60}
        height={60}
        radius={20}
        style={{
          flex: 0.2,
          marginLeft: 10,
        }}
        strokeWidth={5}
        hideLegend={true}
        chartConfig={{
          backgroundColor: colors.surf_green,
          backgroundGradientFrom: colors.surf_green,
          backgroundGradientTo: colors.surf_green,
          color: (opacity = 1) => `rgba(2, 200, 106, ${opacity})`,
        }}
      ></ProgressChart>
      <View
        style={{
          flex: 0.8,
          borderBottomWidth: 1,
          borderBottomColor: colors.bone,
        }}
      >
        <Text
          style={{
            fontFamily: fonts.roboto_bold,
            fontSize: 35,
            color: colors.whitey,
            borderColor: "black",
            paddingBottom: 20,
          }}
        >
          Pills for the day
        </Text>
        <Text
          style={{
            fontFamily: fonts.roboto_regular,
            color: colors.bone,
            fontSize: 20,
            paddingBottom: 20,
          }}
        >
          {pillsTakenCount} of {pills.length}
        </Text>
      </View>
    </View>
  );
};

export default Header;
