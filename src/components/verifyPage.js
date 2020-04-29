import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    SafeAreaView,
    TextInput,
    ActivityIndicator
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux';


class verifyPage extends Component {


    constructor(props) {
        super(props);
        this.onVerifyPress = this.onVerifyPress.bind(this)
    }

    state = {
        button: true
    }


    setButtonBackToTrue() {
        this.setState({
            button: true
        })
    }

    onVerifyPress() {
        this.setState({
            button: false
        })
        setTimeout(() => {
            this.setButtonBackToTrue()
            Actions.getStartedPage()
        },2500)

    }

    verifyButtonOrSprinner() {

        const {
            verifyButtonContainer,
            verifyButtonText
        } = styles;

        if (this.state.button) {
            return(

                <TouchableOpacity
                onPress = {this.onVerifyPress}
                >
                    <LinearGradient
                        start={{x: 1, y: 1}} end={{x: 0, y: 0}}
                        style= {verifyButtonContainer}
                        colors={['#cb2d3e', '#ef473a']}
                        >
                        
                        <Text style = {verifyButtonText}>
                            Verify
                        </Text>
                    
                    </LinearGradient>
                </TouchableOpacity>

            );
        }else {
            return (
                <View style = {verifyButtonContainer}>
                    <ActivityIndicator
                    size = "small"
                    color = "#cb2d3e"
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
            upperPartTopicView,
            upperPartTopicViewText,
            verifyEmailText,
            logoText,
            infoText,
            codeInputTripleView,
            codeSingleInput,
            codeInputText,
            ifYouDidntText,
            resendText,
            resendContainerView,
            verifyButtonContainer,
            verifyButtonText
        }= styles;

       
        return (

            <>
            <StatusBar backgroundColor= "#ef473a" barStyle="light-content" />
            <SafeAreaView style = {{flex: 1}}>
            <View style = {mainContainer}>
                <LinearGradient 
                    start={{x: 0, y: 1}} end={{x: 1, y: 0}}
                    style= {upperPart}
                    colors={['#cb2d3e', '#ef473a']}
                    >

                    <View style = {upperPartTopicView}>
                        <Text style = {upperPartTopicViewText}>
                            Verification....
                        </Text>

                    </View>

                </LinearGradient>
                <View style = {lowerPart}>
                    <Text style = {verifyEmailText}>
                        Verify Email
                    </Text>

                    <Text style = {logoText}>
                        Shoplay
                    </Text>

                    <Text style = {infoText}>
                        Please type the verification code we have just sent you to verify your email
                    </Text>

                    <View style = {codeInputTripleView}>
                        <View style = {codeSingleInput}>
                            <TextInput
                            style = {codeInputText}
                            />

                        </View>

                         <View style = {codeSingleInput}>
                         <TextInput
                            style = {codeInputText}
                            />


                        </View>

                         <View style = {codeSingleInput}>
                         <TextInput
                            style = {codeInputText}
                            />


                        </View>

                         <View style = {codeSingleInput}>
                         <TextInput
                            style = {codeInputText}
                            />


                        </View>

                       

                        

                    </View>

                     <View style = {resendContainerView}>
                            <Text style =  {ifYouDidntText}>
                                If you didn't receive a code!
                            </Text>
                            
                            <TouchableOpacity>
                            <Text style = {resendText}>
                                Resend
                            </Text>
                            </TouchableOpacity>

                        </View>

                        {this.verifyButtonOrSprinner()}
                </View>
                </View>
                </SafeAreaView>
                </>
            
        
        );
    }
}

export default verifyPage;

const {
height,
width
}= Dimensions.get('screen');
const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: '#f1f0f2'
    },
    upperPart: {
        flex: 1,
        borderBottomLeftRadius: width * 0.15,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    lowerPart: {
        flex: 7,
        alignItems: 'center'
    },
  
    upperPartTopicView: {
        justifyContent: 'center',
        paddingVertical: width * 0.01,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        width : width * 0.7,
        marginBottom: height * 0.03
    },
    upperPartTopicViewText: {
        fontSize: height * 0.035,
        color: 'white',
        fontFamily: "Montserrat-Medium"
    },
    verifyEmailText: {
       
        marginTop: height * 0.02,
        fontSize: height * 0.03,
        fontFamily: "Montserrat-Medium"
    },

    logoText: {
        fontSize: height * 0.1,
        color: '#cb2d3e',
        marginTop: height * 0.07,
        fontFamily: "GuthenBloots"

    },
    infoText: {
        fontSize: height * 0.025,
        marginTop: height * 0.04,
        textAlign: 'center',
        paddingHorizontal: width * 0.1,
        fontFamily: "Montserrat-Light"
    },
    codeInputTripleView: {
        flexDirection: 'row',
        width: width * 0.8,
        justifyContent: 'space-evenly',
        marginTop: height * 0.06
    },
    codeSingleInput: {
        borderBottomColor: '#cb2d3e',
        borderBottomWidth: height * 0.0005
    },
    codeInputText: {
        color: 'red',
        paddingVertical: 0
    },
    resendContainerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 0.06
    },
    ifYouDidntText: {
       fontSize: height * 0.02,
       paddingRight: width * 0.01,
       color: 'rgba(0, 0, 0, 0.45)',
       fontFamily: "Montserrat-Light"
    },
    resendText: {
        color: '#cb2d3e',
        fontSize: height * 0.02,
        fontFamily: "Montserrat-Light"
    },
    verifyButtonContainer: {
        width: width * 0.4,
        borderRadius: width * 0.1,
        borderRadius: width * 0.1,
        marginVertical: height * 0.06,
        paddingVertical: height * 0.0125,
        alignItems:'center',
        justifyContent: 'center'
    },
    verifyButtonText: {
        fontSize: height * 0.03,
        color: 'white',
        fontFamily: "Montserrat-Light"
    },

})