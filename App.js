import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView,TextInput,TouchableOpacity,Keyboard, StyleSheet, Text, View, Image,  } from 'react-native';
import Task from './components/Task';
import React,{useState} from "react";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function App() {
  const [task,setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask= ()=>{
    Keyboard.dismiss();
    if(task=== null || task === '') {
      return;
    }
    setTaskItems([...taskItems,task]);
    setTask(null)
    console.log('console from app',task)
    console.log('console frol app',taskItems)
  }

 
  return (
    <View style={styles.container}>
  
    <Task data={taskItems} setTaskItems={setTaskItems}/>
   

     <KeyboardAvoidingView >
             <View style={styles.InputContainer}>
                <View style={[styles.textInputContainer, styles.shadowProp]}>
                    <TextInput style={styles.textInput} value={task} placeholder={"What's your today's task?"}  onChangeText={newTask=>setTask(newTask)}/>
                </View>
                <TouchableOpacity onPress={()=>handleAddTask()}  style={styles.addButtonContainer}> 
                <View>
               <Text> <Icon
                    name={Platform.OS === "ios" ? "ios-add" : "md-add"}
                    color="#ccc"
                    size={25}
                /></Text>
              
                </View> 
                 </TouchableOpacity>
              </View>  
     </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f8f8ff',
    paddingTop:60,
    // paddingHorizontal:20,
    justifyContent: 'center',
   
  },
  textInputContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderColor:"#dedede",
   borderWidth:1,
    width: '74%',
    borderRadius: 60,
},
shadowProp: {
    elevation: 20,
    shadowColor: '#52006A',
},
buttonContainer: {
  width: 200,
  alignItems: 'center',
},
buttonText: {
  textAlign: 'center',
  color: '#4C64FF',
  padding: 15,
  width: 200
},
addButtonContainer:{
    marginVertical: 6,
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    // paddingHorizontal: 10,
    width: 70,
    elevation: 20,
    borderColor:"#dedede",
    borderWidth:1,
    shadowColor: '#52006A',
    height:70,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 60,
},
textInput:{
  fontSize:14,
},
InputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
   height:100,
   
   
    // marginBottom:12,
    paddingHorizontal:20,
    position: 'absolute',
    backgroundColor:'#fff',
    bottom:0,
    width:'100%',

},
});
