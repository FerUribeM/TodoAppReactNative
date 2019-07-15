import React, {Component} from 'react';
import BackgroundImage from "../../components/BackgroundImage";
import {NavigationActions} from 'react-navigation';
import Restaurant from "../../components/Restaurant/Restaurant"
import CommentForm from "../../components/Comment/CommentForm"


import {ScrollView} from "react-native";

export default class DetailtRestaurant extends Component{
	constructor(props){
		super(props);
		const {params} = props.navigation.state;
		this.state = {
			restaurant: params.restaurant
		};
	}

	editRestaurant(){

	}

	goHome(){

	}

	render(){
		const {restaurant} = this.state;
		return (
			<BackgroundImage source={require('../../../assets/images/private_image.png')}>
				<ScrollView>
					<Restaurant 
						goHome={this.goHome.bind(this)}
						editRestaurant={this.editRestaurant.bind(this)}
						restaurant={restaurant}/>

						<CommentForm restaurantId={restaurant.id} />
				</ScrollView>
			</BackgroundImage>
		)
	}

}