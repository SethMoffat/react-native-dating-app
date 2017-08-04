import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Explore extends Component {
  render() {
    return (
      <View>
        <Text>Explore</Text>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('UserProfile')}
        >
          <Text>Match</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Explore;