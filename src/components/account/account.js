import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    StatusBar,
    Alert,
    KeyboardAvoidingView,
} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: '',
            upi: '',
            profession: 'Student'
        }
    }

    validateUPI = (upi) => {
        let re = /^\w+@\w+$/;
        return re.test(upi);
    }

    onSubmit = () => {
        if(this.validateUPI(this.state.upi) && this.state.name !== ''){
            this.props.navigation.navigate('DetailsScreen', {profession: this.state.profession, name: this.state.name, upi: this.state.upi})
        }else{
            Alert.alert(
                '',
                'Please enter valid details',
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
                            style={{width: 100, height: 100, resizeMode: 'contain'}}
                            source={require('../../assets/logo.png')}
                        />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 25}}>  
                        {
                            this.state.profession === 'Student' ? 
                            <TouchableOpacity style={{width: 180, height: 50, 
                                backgroundColor: 'white', borderWidth: 1, borderColor: '#5A67F2', 
                                justifyContent: 'center', alignItems: 'center'}}
                                onPress={() => this.setState({profession: 'Student'})}>
                                <Text style={{color: '#5A67F2', fontSize: 18}}>Student</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={{width: 180, height: 50, 
                                backgroundColor: 'white', borderWidth: 1, borderColor: 'black', 
                                justifyContent: 'center', alignItems: 'center'}}
                                onPress={() => this.setState({profession: 'Student'})}>
                                <Text style={{color: 'black', fontSize: 18}}>Student</Text>
                            </TouchableOpacity>
                        }
                        {
                            this.state.profession === 'Professional' ? 
                            <TouchableOpacity style={{width: 180, height: 50, 
                                backgroundColor: 'white', borderWidth: 1, borderColor: '#5A67F2', 
                                justifyContent: 'center', alignItems: 'center'}}
                                onPress={() => this.setState({profession: 'Professional'})}>
                                <Text style={{color: '#5A67F2', fontSize: 18}}>Professional</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={{width: 180, height: 50, 
                                backgroundColor: 'white', borderWidth: 1, borderColor: 'black', 
                                justifyContent: 'center', alignItems: 'center'}}
                                onPress={() => this.setState({profession: 'Professional'})}>
                                <Text style={{color: 'black', fontSize: 18}}>Professional</Text>
                            </TouchableOpacity>
                        }
                    </View>
                    <TextInput
                        label="Name"
                        style={{backgroundColor: 'white', marginTop: 15}}
                        value={this.state.name}
                        onChangeText={name => this.setState({ name })}
                    />
                    <TextInput
                        label="UPI ID"
                        style={{backgroundColor: 'white', marginTop: 15}}
                        value={this.state.upi}
                        onChangeText={upi => this.setState({ upi })}
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
