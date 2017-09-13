/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RNActionCable from 'react-native-actioncable';
import ActionCableProvider, { ActionCable } from 'react-actioncable-provider';

const cable = RNActionCable.createConsumer('ws://localhost:3000/cable');

class App extends Component {
	state = {
		messages: []
	}

	onReceived = (data) => {
		this.setState({
			messages: [
				data.message,
				...this.state.messages
			]
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<ActionCable channel={{channel: 'MessageChannel'}} onReceived={this.onReceived} />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <View>
        	<Text>There are {this.state.messages.length} messages.</Text>
        </View>
        {this.state.messages.map((message, index) =>
        	<View key={index} style={styles.message}>
		        <Text style={styles.instructions}>
		          {message}
		        </Text>
		      </View>
	      )}
      </View>
	  )
	}
}

export default class TestRNActionCable extends Component {
  render() {
    return (
    	<ActionCableProvider cable={cable}>
	      <App />
	     </ActionCableProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  message: {
  	borderBottomWidth: 1,
  	borderColor: 'black'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TestRNActionCable', () => TestRNActionCable);
