import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#163ff5c4", paddingLeft: 20,paddingRight:20,paddingTop:10,paddingBottom:10 }}>
      <View style={{flex:1 ,backgroundColor:"#1839cc",padding:15}}>
        <View style={{ flexDirection: 'row', width: '100%', }}>
          <Image
            style={{ height: 80, width: 80,borderRadius:100,overflow:"hidden" }}
            source={{ uri: 'data:image/png;base64,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' }}
          />
        </View>
        <View style={{marginTop:30,flex:1,backgroundColor:"#b4b9d1d3",borderRadius:15,padding:20}}>
            <View style={{flex:"row",gap:10,width:'100%',backgroundColor:'red'}}>
              <View style={{backgroundColor:'pink',width:"30%"}}>
                <Text style={{fontSize:17,color:"blue",fontWeight:700,textDecorationStyle:'solid',textDecorationLine:"underline",textDecorationColor:"blue"}}>SIGN IN</Text>
              </View>
              <View>
                <Text style={{fontSize:17,color:"blue",fontWeight:700,textDecorationStyle:'solid',textDecorationLine:"underline",textDecorationColor:"blue"}}>SIGN IN</Text>
              </View>
            </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login


