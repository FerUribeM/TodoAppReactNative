import React, {Component} from 'react';
import BackgroundImage from "../../components/BackgroundImage";
import PreLoader from "../../components/PreLoader";
import {StyleSheet, FlatList} from 'react-native';
import {ListItem} from "react-native-elements";
import {NavigationActions} from 'react-navigation';
import * as firebase from 'firebase';
import RestaurantEmpty from "../../components/Restaurant/RestaurantEmpty"
import RestaurantAddButton from "../../components/Restaurant/RestaurantAddButton"

console.disableYellowBox = true;


export default class Restaurants extends Component {
    constructor(){
        super();

        this.state = {
            restaurants : [],
            loaded : false,
            restaurant_logo: require('../../../assets/images/restaurant.png')        
        };

        this.refRestaurants = firebase.database().ref().child('restaurants');
    }

    componentDidMount() {
        this.refRestaurants.on('value', snapshot => {
            let restaurants = [];
            snapshot.forEach( row => {
                restaurants.push({
                    id : row.key,
                    name: row.val().name,
                    address: row.val().address,
                    capacity: row.val().capacity,
                    description: row.val().description
                })
            });

            this.setState({
                restaurants,
                loaded: true
            });
        })
    }


    addRestaurant(){
        const navigateAction = NavigationActions.navigate({
            routeName: 'AddRestaurant'
        });
        this.props.navigation.dispatch(navigateAction);
    }

    restaurantDetail(restaurant){
        const navigateAction = NavigationActions.navigate({
            routeName: 'DetailRestaurant',
            params: {restaurant}
        });
        this.props.navigation.dispatch(navigateAction);
    }

    renderRestaurant(restaurant){
        const {restaurant_logo} = this.state;
        return(
            <ListItem
                containerStyle={styles.item}
                titleStyle={styles.title}
                roundAvatar
                title={`${restaurant.name} (Capacidad: ${restaurant.capacity})`}
                leftAvatar={{ source: restaurant_logo }}
                onPress={() => this.restaurantDetail(restaurant)}
                rightIcon={{ name: 'arrow-right', type: 'font-awesome', style: styles.listIconStyle}}
        />
        )
    }

    render(){
        const {loaded, restaurants} = this.state;
        if(!loaded){
            return <PreLoader/>
        }

        if ( !restaurants.length) {
            return(
                <BackgroundImage source={require('../../../assets/images/private_image.png')}>
                    <RestaurantEmpty text="No hay restaurantes disponibles"/>
                    <RestaurantAddButton addRestaurant={this.addRestaurant.bind(this)}/>
                </BackgroundImage>
            );    
        }

        return (
            <BackgroundImage source={require('../../../assets/images/private_image.png')}>

                <FlatList
                    data={restaurants}
                    renderItem={(data) => this.renderRestaurant(data.item)}
                />
                
                <RestaurantAddButton addRestaurant={this.addRestaurant.bind(this)}/>
            </BackgroundImage>
        )
    }
}


const styles = StyleSheet.create({
	title: {
		color: '#fff'
	},
	listIconStyle: {
		marginRight: 10,
		fontSize: 15,
		color: 'rgba(255, 38, 74, 0.6)'
	},
	item: {
        margin: 10,
		backgroundColor: 'rgba(240, 54, 81, 0.6)',
	}
});