import React from 'react'
import {
    Button,
    SafeAreaView,
    View,
    Text,
    StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'

import * as actions from './actions'

import InputField from '../components/InputField'
import withOutline from '../components/withOutline'

const InputFieldOutline = withOutline({ radius: 2, color: 'green'})(InputField)


class RegisterFormRedux extends React.Component {
    render() {
        // console.log("render!")
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Register Form Redux</Text>
                <InputField
                    title='Username'
                    placeholder='username'
                    required
                    value={this.props.username}
                    onChangeText={text => this.props.updateForm({ username: text })}
                />
                <InputFieldOutline
                    title='Password'
                    placeholder='password'
                    required
                    protected
                    value={this.props.password}
                    onChangeText={text => this.props.updateForm({ password: text })}
                />
                <InputField
                    title='Full name'
                    placeholder='Full Name'
                    value={this.props.fullname}
                    onChangeText={text => this.props.updateForm({ fullname: text })}
                />

                <Button
                    title='Register'
                    onPress={this.props.registerUser}
                />

                <Text>log</Text>
                <View style={{ borderWidth: 1 }}>
                    {this.props.log != null && (
                        <Text>{this.props.log}</Text>
                    )}
                </View>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.registerForm.username,
        password: state.registerForm.password,
        fullname: state.registerForm.fullname,
        log: state.registerForm.log,
    }  
}

const mapDispatchToProps = dispatch => {
    return {
        updateForm: dict => dispatch(actions.updateForm(dict)),
        registerUser: () => dispatch(actions.registerUser()),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(RegisterFormRedux)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
    },
})
