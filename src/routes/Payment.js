import React, { Component } from 'react';
import {Container, Header, Content, Form, Item, Input, Label, Button, Text} from 'native-base';
import InputText from "../components/InputText";


export default class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            cardType:''
        }
    }
    cardTypeFromNumber(number) {
      //  alert("number:"+number)
        // Diners - Carte Blanche
        re = new RegExp("^30[0-5]");
        if (number.match(re) != null)
            return "Diners - Carte Blanche";

        // Diners
        re = new RegExp("^(30[6-9]|36|38)");
        if (number.match(re) != null)
            return "Diners";

        // JCB
        re = new RegExp("^35(2[89]|[3-8][0-9])");
        if (number.match(re) != null)
            return "JCB";

        // AMEX
        re = new RegExp("^3[47]");
        if (number.match(re) != null)
            return "AMEX";

        // Visa Electron
        re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
        if (number.match(re) != null)
            return "Visa Electron";

        // Visa
        var re = new RegExp("^4");
        if (number.match(re) != null)
            return "Visa";

        // Mastercard
        re = new RegExp("^5[1-5]");
        if (number.match(re) != null)
            return "Mastercard";

        // Discover
        re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
        if (number.match(re) != null)
            return "Discover";

        return "";
    };
   async handleChange(e){
       let cardType = await this.cardTypeFromNumber(e)
       this.setState({
           cardType:cardType
       })
       console.log("cardType:"+cardType)
        /*this.cardTypeFromNumber(e).then((cardType)=>{
            console.log("cardType:"+cardType)
        })*/
        //alert(e)
       // this.props.onChangeText('hello');
    }
    render() {
        return(
            <Container>
                <Content contentContainerStyle={{flex:1,justifyContent: 'center'}}>
                    <Text>{this.state.cardType}</Text>
                    <InputText >Email</InputText>
                    <InputText onChangeText={this.handleChange.bind(this)}>Card number</InputText>
                    <InputText>MM/YY</InputText>
                    <InputText>CVV</InputText>
                    <Button>
                        <Text>Place order</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
