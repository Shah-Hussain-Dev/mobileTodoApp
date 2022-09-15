import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const TaskItem = (props) => {
    console.log("console from task item"+props.data)
    const completeTask = (index)=>{
        let copyItems = [...props.data];
        console.log(copyItems)
        copyItems.splice(index,1)
        props.setTaskItems(copyItems);
      }
  return (
    <View >
    <View style={styles.taskContainer}>
        
    <View style={[styles.taskListContainer,styles.shadowProp]}>
      <Text style={styles.taskListText}>{props.task }  </Text>
    <View>
    </View>
   <TouchableOpacity onPress={()=>completeTask(props.id)} >
    <Text>      <Icon
                    name={"trash-sharp"}
                    color="blue"
                    size={25}
                /></Text>            
    </TouchableOpacity>
    </View>
    </View>
    </View>
  )
}

export default TaskItem

const styles = StyleSheet.create({
    taskContainer:{
        width: '90%',
        marginHorizontal: 23,
    },
    taskListContainer:{
        marginVertical:6,
        backgroundColor: '#FFFFFF',
        paddingVertical:10,
        paddingHorizontal:20,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        borderRadius:60,
        borderColor:"#dedede",
        borderWidth:1,
    },
    shadowProp: {
        elevation: 20,
        shadowColor: '#52006A',
      },
      taskListText:{
        fontSize:18,
      },
      circle:{
        height: 20,
        width:20,
        borderRadius: 60,
        backgroundColor:"blue"
      },
      clearButton:{
        width: 300,
      }
})