import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function LogSign() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1 }}>
      {/* Background starts here */}
      <View style={styles.backgroundContainer}>
        <Image
          style={styles.bgTop}
          resizeMode="contain"
          source={require("../../../images/welcome/bg1.png")}
        />
        <View style={styles.bgTopRightContainer}>
          <Image
            style={styles.bgTopRight}
            resizeMode="contain"
            source={require("../../../images/welcome/bg3.png")}
          />
        </View>
        <View style={styles.bgBottomLeftContainer}>
          <Image
            style={styles.bgBottomLeft}
            resizeMode="contain"
            source={require("../../../images/welcome/bg2.png")}
          />
        </View>
      </View>
      {/* Background ends */}

      {/* Foreground content */}
      <View style={styles.foregroundContainer}>
        <View style={styles.content}>
          <Text style={styles.sloganText}>“WHERE CARE MEETS TRUST.”</Text>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require("../../../images/welcome/logo.png")}
          />
          <TouchableOpacity onPress={()=>navigation.navigate('login')} style={styles.loginButton}>
            <Image
              style={styles.loginIcon}
              source={require("../../../images/welcome/arrow.png")}
            />
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.loginButton,backgroundColor:'white',borderColor:'',borderWidth:1}}>
            <Image
              style={styles.loginIcon}
              source={require("../../../images/welcome/arrow.png")}
            />
            <Text style={styles.loginText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "white",
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  bgTop: {
    height: 215,
    width: "100%",
  },
  bgTopRightContainer: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 50,
  },
  bgTopRight: {
    height: 120,
    width: 50,
  },
  bgBottomLeftContainer: {
    width: "100%",
    alignItems: "flex-start",
    marginTop: "auto",
  },
  bgBottomLeft: {
    height: 150,
    width: 70,
  },
  foregroundContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "70%",
    alignItems: "center",
  },
  sloganText: {
    fontSize: 30,
    fontWeight: "600",
    color: "#16a5a5ff",
    textAlign: "center",
    marginBottom: 10,
  },
  logo: {
    width: "100%",
    height: 230,
    marginLeft: 10,
  },
  loginButton: {
    backgroundColor: "#7FC1B9",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 200,
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
    marginTop: 20,
  },
  loginIcon: {
    height: 20,
    width: 20,
  },
  loginText: {
    fontWeight: "600",
    fontSize: 16,
  },
});
