import React, {Component} from 'react';
import AppButton from "../AppButton";

export default class RestaurantAddButton extends Component {
    render(){
        const {addRestaurant} = this.props;
        return(
            <AppButton 
                    bgColor="rgba(255,38,74, 0.6)"
                    title="Añadir un restaurante"
                    action={addRestaurant}
                    iconName="plus"
                    iconSize={30}
                    iconColor="#FFF"/>
        )
    }
}