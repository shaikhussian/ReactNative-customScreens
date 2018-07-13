import React, { Component } from 'react';
import {Container, Header, Content, Form, Item, Input, Label, Button, Text} from 'native-base';
import InputText from "../components/InputText";


export default class Register extends Component {
    Register(){
        this.props.history.push('/payment');
    }
    render() {
        return(
            <Container>
                <Content contentContainerStyle={{flex:1,justifyContent: 'center'}}>
                        <InputText>FIRST NAME</InputText>
                        <InputText>LAST NAME</InputText>
                        <InputText>MOBILE NUMBER</InputText>
                        <InputText>EMAIL</InputText>
                        <InputText>PASSWORD</InputText>
                        <InputText>CONFIRM PASSWORD</InputText>
                    <Button onPress={this.Register.bind(this)}>
                        <Text>Register</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
