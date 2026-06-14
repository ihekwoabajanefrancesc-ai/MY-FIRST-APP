import { SafeAreaView } from "react-native-safe-area-context";
import {View, Text, Pressable, ScrollView, Image, TouchableOpacity, TextInput, StyleSheet} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
export default function Index(){    
    return(
        <SafeAreaView style={{flex:1, paddingHorizontal:20, backgroundColor:"#F5F7FF"}}>
            <ScrollView style={{margingHorizonzal:20}} contentContainerStyle={{gap:5}}
                showsVerticalScrollIndicator={false}>
                <View style={{flexDirection:"row", marginTop:10, marginBottom:-5}}>
                    <Pressable style={{backgroundColor:"white", height:20, width:20, borderRadius:10, justifyContent:"center"}}>
                        <MaterialIcons name="keyboard-arrow-left" size={20} color="#3f3f3f"/>
                    </Pressable>
                </View>
                <Image 
                    source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSguGPp3P-U-yAIphd8SQCz29jY0w__kxOYTs0PWA5VUw&s=10"}}
                    style={{height: 25, width:50, marginBottom:-5}}
                />
                <View>
                    <Text style={{fontSize:15, fontWeight:"bold", marginBottom:2}}>Get started on Facebook</Text>
                    <Text style={{fontSize:10.5, color:"#0c0c0c", marginBottom:5}}>Create an account to connect with friends, family and communities of people who share your interests.</Text>
                    <Text style={{fontSize:12, fontWeight:"600", marginBottom:1}}>Name</Text>
                </View>
                <View style={{flexDirection:"row", flex:1, gap:10}}>
                    <TextInput placeholder={"First name"} style={[styles.input]}/>
                    <TextInput placeholder="Surname" style={[styles.input]}/>
                </View>
                <View>
                    <Text style={{fontSize:12, fontWeight:"600", marginBottom:1}}>Date of birth <FontAwesome6 name="circle-question" size={12} color="black"/></Text>
                </View>
                <View style={{flexDirection:"row", gap:10}}>
                    <TextInput placeholder={"Day"} style={[styles.input]}/>
                    <TextInput placeholder="Month" style={[styles.input]}/>
                    <TextInput placeholder="Year" style={[styles.input,]}/>
                </View>
                <View>
                    <Text style={{fontSize:12, fontWeight:"600", marginBottom:1}}>Gender <FontAwesome6 name="circle-question" size={12} color="black"/></Text>
                </View>
                <View style={{flexDirection:"row", gap:10}}>
                    <TextInput placeholder={"Select your gender"} style={[styles.input]}/>
                </View>
                <View>
                    <Text style={{fontSize:12, fontWeight:"600", marginBottom:1}}>Mobile number or email address</Text>
                </View>
                <View style={{flexDirection:"row", gap:10}}>
                    <TextInput placeholder={"Mobile number or email address"} style={[styles.input]}/>
                </View>
                <View>
                    <Text style={{fontSize:10, color:"#606770", marginTop:-7, marginBottom:3, fontWeight:"600"}}>
                        You may receive notifications from us. <Text style={{color:"#1877f2", fontWeight:"600"}}> Learn why we ask for your contact information</Text>
                    </Text>
                </View>
                <View>
                    <Text style={{fontSize:12, fontWeight:"600", marginBottom:1}}>Password</Text>
                </View>
                <View style={{flexDirection:"row", gap:10}}>
                    <TextInput placeholder={"Password"} style={[styles.input]}/>
                </View>
                <View>
                    <Text style={{fontSize:10.5, color:"#606770", marginVertical:3, marginBottom:-5, fontWeight:"600"}}>
                        People who use our service may have uploaded your contact information to Facebook. <Text style={{color:"#1877f2", fontWeight:"600"}}> Learn more</Text>
                    </Text>
                    <Text style={{fontSize:10.5, color:"#606770", marginBottom:-5, marginVertical:10, fontWeight:"600"}}>
                        By tapping Submit, you agree to create an account and to Facebook's <Text style={{color:"#1877f2", fontWeight:"600"}}> Terms</Text>, <Text style={{color:"#1877f2", fontWeight:"600"}}> Privacy Policy</Text> and <Text style={{color:"#1877f2", fontWeight:"600"}}> Cookies Policy</Text>.
                    </Text>
                     <Text style={{fontSize:10.5, color:"#606770", marginVertical:10, marginBottom:-6, fontWeight:"600"}}>
                       The <Text style={{color:"#1877f2", fontWeight:"600"}}> Privacy Policy</Text> describes the ways we can use the information we collect when you create an account. For example, we use this information to provide, personalise and improve our products, including ads.
                    </Text>
                </View>
                <View>
                    <TouchableOpacity style={{backgroundColor:"#1877f2", padding:7, borderRadius:20, justifyContent:"center", marginTop:15}}>
                        <Text style={{color:"#ddd", fontSize:10, fontWeight:"600", textAlign:"center"}}> Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderWidth:1, borderColor:"#ddd", padding:7, borderRadius:20, justifyContent:"center", marginTop:8}}>
                        <Text style={{color:"#606770", fontSize:10, fontWeight:"bold", textAlign:"center"}}>I already have an account</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
  input:{flex:1, height:40, borderWidth:1, color:"#606770", fontSize:10, fontWeight:"bold", borderColor:"#ddd", borderRadius:10, marginBottom:10},
});
