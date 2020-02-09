import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: ""
        }
    }

    enterChatroom() {
        if (this.state.displayName == "") {
            alert("Please enter a display name");
        } else {
            this.props.navigation.navigate("Conversation", {displayName: this.state.displayName});
        }
    }

    render() {
        return (
            <View>
                <Text>Welcome to WhatsApp Lite</Text>
                <TextInput onChangeText = {(text) => this.setState({displayName: text})}
                    placeholder = "Enter your display name" />
                <Button title='Enter' onPress={() => this.enterChatroom()} />
            </View>
        )
    }
}