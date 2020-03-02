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
    KeyboardAvoidingView,
} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: '',
            upi: '',
            phone: ''
        }
    }

    componentDidMount(){
        const name = this.props.navigation.getParam('name', null);
        const upi = this.props.navigation.getParam('upi', null);

        this.setState({
            name, 
            upi
        })
    }

    render() {
        const profession = this.props.navigation.getParam('profession', null);
        return (
        <KeyboardAvoidingView style={styles.root}>
                <View style={styles.container}>
                    <TextInput
                        label="Name"
                        style={{backgroundColor: 'white', marginTop: 15}}
                        value={this.state.name}
                        onChangeText={name => this.setState({ name })}
                    />
                    <TextInput
                        label="Upi id"
                        style={{backgroundColor: 'white', marginTop: 15}}
                        value={this.state.upi}
                        onChangeText={upi => this.setState({ upi })}
                    />
                    <TextInput
                        label="Phone"
                        style={{backgroundColor: 'white', marginTop: 15}}
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                    />
                    <View>
                        <Text style={{color:'black', fontSize: 18, marginTop: 15}}>Profession: </Text>
                        <Text style={{color:'#5A67F2', fontSize: 18, marginTop: 15}}>{profession}</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity style={{backgroundColor: '#5A67F2', borderRadius: 5, width: 180, height: 50, 
                        justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
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
        margin:15
    }
});
