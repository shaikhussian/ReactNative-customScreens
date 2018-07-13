import React, { Component } from 'react';
import {Container, Header, Content, Form, Item, Input, Label, Button, Text} from 'native-base';
import { Image } from 'react-native';
import InputText from "../components/InputText";
//import Image from '~/assets/images'


export default class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            cardType:'',
            image:''
        }
    }
    cardTypeFromNumber(number) {
      //  alert("number:"+number)
        // Diners - Carte Blanche
        re = new RegExp("^30[0-5]");
        if (number.match(re) != null)
            return {'cardType':"Diners - Carte Blanche",'image':require('~/assets/images/DinersCarteBlanche.png')};

        // Diners
        re = new RegExp("^(30[6-9]|36|38)");
        if (number.match(re) != null)
            return {'cardType':"Diners",'image':require('~/assets/images/Diners.png')};

        // JCB
        re = new RegExp("^35(2[89]|[3-8][0-9])");
        if (number.match(re) != null)
            return {'cardType':"JCB",'image':require('~/assets/images/JCB.png')};

        // AMEX
        re = new RegExp("^3[47]");
        if (number.match(re) != null)
            return {'cardType':"AMEX",'image':require('~/assets/images/AMEX.png')};

        // Visa Electron
        re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
        if (number.match(re) != null)
            return {'cardType':"Visa Electron",'image':require('~/assets/images/VisaElectron.png')};

        // Visa
        var re = new RegExp("^4");
        if (number.match(re) != null)
            return {'cardType':"Visa",'image':require('~/assets/images/Visa.png')};

        // Mastercard
        re = new RegExp("^5[1-5]");
        if (number.match(re) != null)
            return {'cardType':"Mastercard",'image':require('~/assets/images/Mastercard.png')};

        // Discover
        re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
        if (number.match(re) != null)
            return {'cardType':"Discover",'image':require('~/assets/images/Discover.png')};

        return "";
    };
   async handleChange(e){
       let card = await this.cardTypeFromNumber(e)
       this.setState({
           cardType:card.cardType,
           image:card.image
       })
      // console.log("cardType:"+cardType)
        /*this.cardTypeFromNumber(e).then((cardType)=>{
            console.log("cardType:"+cardType)
        })*/
        //alert(e)
       // this.props.onChangeText('hello');
    }
   /* handleChange(e){
        alert(e)
    }*/
    render() {
        return(
            <Container>
                <Content contentContainerStyle={{flex:1,justifyContent: 'center'}}>
                    <Image
                        style={{
                            width: 150,
                            resizeMode: 'contain',
                            height: 150
                        }}
                        source={this.state.image}
                    />
                    <InputText >Email</InputText>
                    <InputText onChangeText={this.handleChange.bind(this)}>Card number</InputText>
                    <InputText >MM/YY</InputText>
                    <InputText >CVV</InputText>
                    <Button>
                        <Text>Place order</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
