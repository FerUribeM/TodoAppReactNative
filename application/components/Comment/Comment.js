import React, {Component} from 'react';
import {Card, Rating} from "react-native-elements";
import {StyleSheet} from "react-native";

export default class Comment extends Component{
    render(){
        const {comment} = this.props;

        return(
            <Card title={comment.comment}>
                <Rating
                    styles={styles.rating}
                    imageSize={20}
                    readonly
                    startingValue={comment.rating}/>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    rating: {
        alignItems: 'center'
    }
})