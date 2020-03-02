import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
    Alert,
} from 'react-native';
import {TextInput} from 'react-native-paper';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            phone: ''
        }
    }

    validatePhone = (phone) => {
        let re = /^\d{10}$/;
        return re.test(phone);
    }

    onSubmit = () => {
        if(this.validatePhone(this.state.phone)){
            this.props.navigation.navigate('AccountScreen')
        }else{
            Alert.alert(
                '',
                'Please enter valid phone number',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
            );
        }
    }

    render() {
        return (
        <KeyboardAvoidingView style={styles.root}>
                <View style={styles.container}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 75}}>
                        <Image
                            style={{width: 50, height: 50, resizeMode: 'contain'}}
                            source={require('../../assets/logo.png')}
                        />
                        <Image style={{width: 150, height: 150, marginLeft: 15, resizeMode: 'contain'}} source={require('../../assets/goDutch.png')} />
                    </View>
                    <TextInput
                        label="Phone"
                        style={{backgroundColor: 'white'}}
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                    />
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity style={{backgroundColor: '#5A67F2', borderRadius: 5, width: 180, height: 50, 
                        justifyContent: 'center', alignItems: 'center', marginTop: 50}}
                        onPress={() => this.onSubmit()}>
                            <Text style={{color: 'white', fontSize: 18}}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  container:{
      margin: 15
  }
});
