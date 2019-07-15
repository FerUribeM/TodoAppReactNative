import React, {Component} from 'react';
import AppButton from "../AppButton";
import {options, Comment} from '../../forms/comment';
import t from 'tcomb-form-native';
const Form = t.form.Form;
import {Card} from "react-native-elements";
import {View} from "react-native";
import * as firebase from 'firebase';
import Toast from 'react-native-simple-toast';


export default class CommentForm extends Component {
	
	constructor() {
	  super();
	  this.state = {
	  		comment:{
	  			comment: '',
	  			rating: 1
	  		}
	  };
	}

	addComment(){

	}

	onChange (comment) {
		this.setState({comment});
	}

	render(){
		const {comment} = this.state;
		return(
		<Card title="Dános tu opinión">
				<View>
					<Form
						ref="form"
						type={Comment}
						options={options}
						value={comment}
						onChange={(v) => this.onChange(v)}
					/>
				</View>

				<AppButton
					bgColor="rgba(255, 38, 74, 0.9)"
					title="Publicar opinión"
					action={this.addComment.bind(this)}
					iconName="comments"
					iconSize={30}
					iconColor="#fff"
				/>
			</Card>
		)
	}

}