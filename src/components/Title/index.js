import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Title extends Component{
  state = {
    userName: 'JohnDoe',
  };

  componentDidMount(){
    console.log('component Title did mount');
    setTimeout( () => {
      this.setState({userName: 'Grace Feibe'});
    }, 5000);
  };

  componentDidUpdate(){
    console.log('component Title did update');
  }

  componentWillUnmount(){
    console.log('component Title wil unmount');
  }
  
  render(){
    console.log('render component Title');
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.text}</Text>
        <Text>userName : {this.state.userName}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      backgroundColor:  'gray',
      alignItems: 'center',
      paddingVertical: 20,
    },
    text: {
      fontSize: 24,
      fontWeight: '600',
    },
  })
  
export default Title;