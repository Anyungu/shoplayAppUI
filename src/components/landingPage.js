

import React, { Component } from 'react'

import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Text,
    StatusBar,
    SafeAreaView,
    ActivityIndicator
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import {
    sendEmail,
    updateErrorMessage,
    clearErrorMessage
} from '../actions/emailActions';
import { connect } from 'react-redux';



class landingPage extends Component {
    constructor() {
        super();
        this.onLetsGoPress = this.onLetsGoPress.bind(this)
    }

    state = {
        emailText: '',
    }


    emailType(value) {

        this.props.clearErrorMessage();
        this.setState({ emailText: value })

    }


    errorMessageOrNot() {
        if (this.props.error !== '' || this.props.error !== null) {
            return (
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontFamily: "Montserrat-Light", color: 'red' }}>
                        {this.props.error}
                    </Text>

                </View>
            )
        }
    }


    onLetsGoPress() {

        this.props.clearErrorMessage();

        const {
            emailText
        } = this.state;

        if (emailText === '' || emailText === null) {

            this.props.updateErrorMessage('Please type a valid email');

        } else {

            this.props.sendEmail(this.state.emailText);

        }


    }

    letsGoButtonOrSpinner() {

        const {
            letsGoButtonContainer,
            letsGoButtonText
        } = styles;

        if (this.props.loading === false) {

            return (
                <TouchableOpacity
                    onPress={this.onLetsGoPress}
                >
                    <LinearGradient
                        start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }}
                        style={letsGoButtonContainer}
                        colors={['#cb2d3e', '#ef473a']}
                    >

                        <Text style={letsGoButtonText}>
                            Cool Lets Go
                        </Text>

                    </LinearGradient>
                </TouchableOpacity>
            )

        } else {
            return (
                <View style={letsGoButtonContainer}>
                    <ActivityIndicator
                        size="small"
                        color="#cb2d3e"
                    />

                </View>
            );
        }

    }

    render() {

        const {
            mainContainer,
            upperPart,
            lowerPart,
            emailInputContainer,
            emailTextInputSpecs,
            logoContainer,
            logoText,
            introductionContainer,
            welcomeText,
            introductionText
        } = styles

        return (

            <>
                <StatusBar backgroundColor="#ef473a" barStyle="light-content" />
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={mainContainer}>

                        <LinearGradient
                            start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }}
                            style={upperPart}
                            colors={['#cb2d3e', '#ef473a']}
                        >

                            <View style={logoContainer}>
                                <Text style={logoText}>
                                    Shoplay
                    </Text>

                            </View>

                            <View style={introductionContainer}>
                                <Text style={welcomeText}>
                                    Welcome
                    </Text>

                                <Text style={introductionText}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt efficitur gravida. Quisque viverra enim at suscipit dapibus. Nulla facilisi.  Quisque viverra enim at suscipit dapibus. Nulla facilisi.  Quisque viverra enim at suscipit dapibus. Nulla facilisi.

                    </Text>

                            </View>

                        </LinearGradient>

                        {this.errorMessageOrNot()}


                        <View style={lowerPart}>
                            <View style={emailInputContainer}>
                                <TextInput
                                    placeholder="  Email  "
                                    placeholderTextColor="rgba(204, 50, 50, 0.56)"
                                    value={this.state.emailText}
                                    onChangeText={value => this.emailType(value)}
                                    style={emailTextInputSpecs}
                                />

                            </View>

                            {this.letsGoButtonOrSpinner()}

                        </View>
                    </View>
                </SafeAreaView>
            </>
        );
    }

}


const mapStateToProps = ({ emailReducer }) => {

    const { email, error, loading } = emailReducer;

    return { email, error, loading };

};

export default connect(mapStateToProps, { sendEmail, updateErrorMessage, clearErrorMessage })(landingPage);



const {
    width,
    height
} = Dimensions.get('screen');

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f1f0f2'
    },
    upperPart: {
        flex: 2.5,
        borderBottomLeftRadius: width * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: height * 0.05
    },
    lowerPart: {
        flex: 1,
        alignItems: 'center'
    },
    emailInputContainer: {
        width: width * 0.75,
        backgroundColor: 'white',
        borderRadius: width * 0.1,
        marginVertical: height * 0.0125,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emailTextInputSpecs: {
        color: '#cb2d3e',
        fontSize: height * 0.03,
        paddingVertical: height * 0.0125,
        fontFamily: "Montserrat-Light"

    },
    letsGoButtonContainer: {
        width: width * 0.45,
        borderRadius: width * 0.1,
        borderRadius: width * 0.1,
        marginVertical: height * 0.0125,
        paddingVertical: height * 0.0125,
        alignItems: 'center',
        justifyContent: 'center'
    },
    letsGoButtonText: {
        fontSize: height * 0.03,
        color: 'white',
        fontFamily: "Montserrat-Light"
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    logoText: {
        fontSize: height * 0.1,
        color: 'white',
        fontFamily: "GuthenBloots"
    },

    introductionContainer: {
        flex: 2,
        alignItems: 'center',
        paddingHorizontal: width * 0.15,

    },
    welcomeText: {
        fontSize: height * 0.04,
        color: 'white',
        fontFamily: "Montserrat-Light"
    },
    introductionText: {
        fontSize: height * 0.025,
        color: 'white',
        fontFamily: "Montserrat-Light",
        textAlign: 'center'
    }

})