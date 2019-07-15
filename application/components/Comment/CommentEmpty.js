import React, {Component} from 'react';
import {Text} from "react-native-elements";
import {View, StyleSheet,FlatList} from "react-native";

export default class CommentEmpty extends Component{
    render(){
        return(
            <View style={styles.commentEmptyView}>
                <Text style={styles.commentEmptyText}>Sé el primero en opinar</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    commentEmptyView: {
        justifyContent: 'center',
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15
    },
    commentEmptyText:{
        backgroundColor: 'rgba(10, 255, 10, 0.8)',
        color: 'white',
        textAlign: 'center',
        padding: 20
    }
})