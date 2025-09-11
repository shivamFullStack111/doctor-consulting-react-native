import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, TextInput } from "react-native-paper";

const Register = () => {
  const navigation = useNavigation()
  const [data,setdata]=useState({})
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
            Sign Up
          </Text>

          <View style={{ width: '100%', flexDirection: 'column' }}>
            <TextInput

              style={{ marginTop: 10, borderColor: '#7FC1B9' }}
              label="Name"
              activeOutlineColor="#7FC1B9"
              value={data?.name}
              onChangeText={text => setdata(p => ({ ...p, name: text }))}
              mode="outlined"
            />
            <TextInput

              style={{ marginTop: 10, borderColor: '#7FC1B9' }}
              label="Email"
              activeOutlineColor="#7FC1B9"
              value={data?.email}
              onChangeText={text => setdata(p => ({ ...p, email: text }))}
              mode="outlined"
            />
            <TextInput
              style={{ marginTop: 10 }}
              label="Password"
              activeOutlineColor="#7FC1B9"
              value={data?.password}
              onChangeText={text => setdata(p => ({ ...p, password: text }))}
              secureTextEntry={true}
              mode="outlined"
            />

            <Button style={{ marginTop: 20, backgroundColor: '#7FC1B9' }} mode="contained" onPress={() => console.log('Pressed')}>
              Submit
            </Button>

            <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
              <Text style={{ fontSize: 16 }}>Already have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('login')} >
                <Text style={{ fontSize: 16, color: "blue", marginLeft: 5 }} >Sign In</Text>
              </TouchableOpacity>
            </View>


          </View>
        </View>
      </View>


    </View>
  );
};

export default Register;
