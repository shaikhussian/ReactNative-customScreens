import React, { Component } from 'react';
import {Container, Header, Content, Item, Input, Label, Button, Text} from 'native-base';
import InputText from '~/components/InputText';



export default class Login extends Component {
    Login(){
        console.log("login")
    }
    Register(){
        this.props.history.push('/signUp');
    }
    render() {
        return(
            <Container>
                <Content contentContainerStyle={{flex:1,justifyContent: 'center'}}>
                        <InputText>USER NAME</InputText>
                        <InputText >Password</InputText>
                    <Button onPress={this.Login.bind(this)}>
                        <Text>Login</Text>
                    </Button>
                    <Button onPress={this.Register.bind(this)}>
                        <Text>Register</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
