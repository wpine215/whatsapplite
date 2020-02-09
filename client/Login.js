import React from "react";
import { View, Text, TextInput } from "react-native";

export default class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            displayName = ""
        }
    }

    render() {
        return(
            <View>
                <Text>Welcome to WhatsApp Lite</Text>
                <TextInput onChangeText = {
                    (text) => this.setState({displayName: text})
                    }
                    placeholder = "Enter your display name"
                />
            </View>
        )
    }
}