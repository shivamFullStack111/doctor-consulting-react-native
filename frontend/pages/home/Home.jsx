import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Octicons from "react-native-vector-icons/Octicons";

const Home = () => {
  const navigation = useNavigation();
  const [data, setdata] = useState({});

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
        }}
      >
        <SafeAreaView style={{ flex: 1, padding: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Octicons name="three-bars" color="#000" size={24} />
            {/* <Image
              style={{ width: 50, height: 50, marginLeft: 10 }}
              source={require("../../images/welcome/logo.png")}
            ></Image> */}
            <TouchableOpacity
              style={{
                marginLeft: "auto",
                borderWidth: 1,
                padding: 7,
                borderRadius: 10,
              }}
            >
              <Text style={{ fontWeight: 600 }}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Home;
