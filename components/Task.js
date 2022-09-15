import { Button, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Taskitem from './TaskItem'

const Task = (props) => {
    console.log('console from task', props.data)
    function ClearAll() {
        props.setTaskItems([])
    }

    return (
        <View style={styles.taskContainer}>
            <View style={styles.taskTitle}><Text style={styles.taskText}>Today's Tasks 🚀</Text></View>


            {props.data.length > 0 && <TouchableOpacity onPress={() => ClearAll()}  style={{justifyContent: 'center',alignItems: 'center'}} ><View title='Clear All Task' style={styles.button}  ><Text style={styles.text}>Clear All</Text></View></TouchableOpacity>}
            <ScrollView showsVerticalScrollIndicator={false} style={{ overflow: 'hidden' }}>
                {
                    props.data.map((task, index, arr) => {
                        console.log('map', arr)
                        return <Taskitem key={index} task={task} data={arr} id={index} setTaskItems={props.setTaskItems} />
                    })
                }

            </ScrollView>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    taskContainer: {
        flex: 1,
        // justifyContent:'space-between',
        // overflow: 'hidden',
        // alignItems:'center',
    },
    taskTitle: {
        // height:40,
        width: '100%',
    },
    taskText: {
        fontSize: 30,
        fontWeight: '800',
        textAlign: 'center',
        marginBottom: 10,
    },
    clearButton: {
     borderRadius: 100, marginBottom: 10, width: 140, height: 80, justifyContent: 'center', alignItems: 'center',
     backgroundColor:'green'

     },
     button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },

})