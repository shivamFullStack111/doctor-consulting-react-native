import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import React from "react";

const Welcome = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* background start  */}
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          position: "absolute",
          height: "100%",
          width: "100%",
        }}
      >
        <Image
          style={{ height: 215, objectFit: "contain", width: "100%" }}
          source={require("../../images/welcome/bg1.png")}
        ></Image>
        <View style={{ width: "100%", alignItems: "flex-end", marginTop: 50 }}>
          <Image
            style={{
              height: 120,
              width: 50,
              objectFit: "contain",
              alignItems: "flex-end",
            }}
            source={require("../../images/welcome/bg3.png")}
          ></Image>
        </View>
        <View
          style={{ width: "100%", alignItems: "flex-start", marginTop: "auto" }}
        >
          <Image
            style={{
              height: 150,
              width: 70,
              objectFit: "contain",
              alignItems: "flex-end",
            }}
            source={require("../../images/welcome/bg2.png")}
          ></Image>
        </View>
      </View>
      {/* background end  */}
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "70%",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "600", color: "#595858" }}>
            WELCOME!
          </Text>
          <Image
            style={{
              objectFit: "contain",
              width: "100%",
              height: 230,
              marginLeft: 10,
            }}
            source={require("../../images/welcome/logo.png")}
          ></Image>
          <TouchableOpacity
            style={{
              backgroundColor: "#7FC1B9",
              padding: 12,
              paddingLeft: 20,
              paddingRight: 20,
              borderRadius: 200,
              alignItems: "center",
              flexDirection: "row",
              gap: 5,
              marginTop: 20,
            }}
          >
            <Image
              style={{ height: 20, width: 20 }}
              source={require("../../images/welcome/icon.png")}
            ></Image>
            <Text>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
