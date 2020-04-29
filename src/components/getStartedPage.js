

import React, {Component} from 'react'

import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Text,
    StatusBar,
    SafeAreaView,
    Animated,
    ActivityIndicator,
    ScrollView

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';



class getStartedPage extends Component {
    constructor(props) {
        super(props);
        this.onDonePress = this.onDonePress.bind(this)
    }

    state = {
        pageShow: 1,
        pageTopic: 'GetStarted',
        dotShow: 1,
        dotColor: 'red' 
    }

    onDonePress() {
      Actions.singleItemPage();
    }

    
    openProfile() {

    }


    render() {

        const {
            height,
            width
        } = Dimensions.get('screen');

        const {
            mainContainer,
            upperPart,
            lowerPart,
            upperPartTopicView,
            upperPartTopicViewText,
            questionView,
            questionViewTopicText,
            questionViewRequiredText,
            questionViewInfoText,
            questionViewRequiredSuperText,
            doneCardView,
            doneText,
            tripletCategoryView,
            tripletBorder,
            categoryCard,
            categoryNameText,
            specificCategoryLeftCenter,
            specificCategoryRight
        } = styles;
        return(

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
                            Get Started....
                        </Text>

                    </View>

                </LinearGradient>
                <View style = {lowerPart}>
                    <View style = {questionView}>
                        <Text style = {questionViewTopicText}>
                            Select Your Categories
                        </Text>
                        <View style = {{flexDirection: 'row'}}>

                            <Text style = {questionViewRequiredSuperText}>
                                {'\u2605'}
                            
                            </Text>


                            <Text style = {questionViewRequiredText}>
                                
                                Required
                            </Text>


                        </View>
                        <Text style = {questionViewInfoText}>
                            We will prepare choices of products according to your preferences
                        </Text>
                        
                    </View>


                    <ScrollView  showsVerticalScrollIndicator = {false}>
                        <View style = {tripletCategoryView}>
                            <View style = {specificCategoryLeftCenter}>
                                <View style = {categoryCard}>
                                <Feather
                                    name = "arrow-right"
                                    color = "black"
                                    size = {height * 0.045}
                                />

                                </View>
                                <Text style = {categoryNameText}>
                                    Electronics 1 and 2
                                </Text>

                            </View>

                             <View style = {specificCategoryLeftCenter}>
                                <View style = {categoryCard}>
                                <Feather
                                    name = "arrow-right"
                                    color = "black"
                                    size = {height * 0.045}
                                />

                                </View>
                                <Text style = {categoryNameText}>
                                    Electronics
                                </Text>

                            </View>


                            <View style = {specificCategoryRight}>
                                <View style = {categoryCard}>
                                <Feather
                                    name = "arrow-right"
                                    color = "black"
                                    size = {height * 0.045}
                                />

                                </View>
                                <Text style = {categoryNameText}>
                                    Electronics
                                </Text>

                            </View>


                        </View>
                        <View style = {tripletBorder}/>

                        <View style = {tripletCategoryView}>
                            <View style = {specificCategoryLeftCenter}>
                                <View style = {categoryCard}>
                                <Feather
                                    name = "arrow-right"
                                    color = "black"
                                    size = {height * 0.045}
                                />

                                </View>
                                <Text style = {categoryNameText}>
                                    Electronics
                                </Text>

                            </View>

                             <View style = {specificCategoryLeftCenter}>
                                <View style = {categoryCard}>
                                <Feather
                                    name = "arrow-right"
                                    color = "black"
                                    size = {height * 0.045}
                                />

                                </View>
                                <Text style = {categoryNameText}>
                                    Electronics
                                </Text>

                            </View>


                            <View style = {specificCategoryRight}>
                                <View style = {categoryCard}>
                                <Feather
                                    name = "arrow-right"
                                    color = "black"
                                    size = {height * 0.045}
                                />

                                </View>
                                <Text style = {categoryNameText}>
                                    Electronics
                                </Text>

                            </View>



                        </View>
                        <View style = {tripletBorder}/>

                        <View style = {tripletCategoryView}>
                            <View style = {specificCategoryLeftCenter}>
                                <View style = {categoryCard}>
                                <Feather
                                    name = "arrow-right"
                                    color = "black"
                                    size = {height * 0.045}
                                />

                                </View>
                                <Text style = {categoryNameText}>
                                    Electronics
                                </Text>

                            </View>

                             <View style = {specificCategoryLeftCenter}>
                                <View style = {categoryCard}>
                                <Feather
                                    name = "arrow-right"
                                    color = "black"
                                    size = {height * 0.045}
                                />

                                </View>
                                <Text style = {categoryNameText}>
                                    Electronics
                                </Text>

                            </View>


                            <View style = {specificCategoryRight}>
                                <View style = {categoryCard}>
                                <Feather
                                    name = "arrow-right"
                                    color = "black"
                                    size = {height * 0.045}
                                />

                                </View>
                                <Text style = {categoryNameText}>
                                    Electronics
                                </Text>

                            </View>



                        </View>
                        <View style = {tripletBorder}/>

                        <View style = {tripletCategoryView}>
                            <View style = {specificCategoryLeftCenter}>
                                <View style = {categoryCard}>
                                <Feather
                                    name = "arrow-right"
                                    color = "black"
                                    size = {height * 0.045}
                                />

                                </View>
                                <Text style = {categoryNameText}>
                                    Electronics and Feeding version 2 and 3
                                </Text>

                            </View>

                             <View style = {specificCategoryLeftCenter}>
                                <View style = {categoryCard}>
                                <Feather
                                    name = "arrow-right"
                                    color = "black"
                                    size = {height * 0.045}
                                />

                                </View>
                                <Text style = {categoryNameText}>
                                    Electronics
                                </Text>

                            </View>


                            <View style = {specificCategoryRight}>
                                <View style = {categoryCard}>
                                <Feather
                                    name = "arrow-right"
                                    color = "black"
                                    size = {height * 0.045}
                                />

                                </View>
                                <Text style = {categoryNameText}>
                                    Electronics
                                </Text>

                            </View>



                        </View>
                        <View style = {tripletBorder}/>

                        <View style = {tripletCategoryView}>
                            <View style = {specificCategoryLeftCenter}>
                                <View style = {categoryCard}>

                                </View>
                                <Text style = {categoryNameText}>
                                    Electronics
                                </Text>

                            </View>

                             <View style = {specificCategoryLeftCenter}>
                                <View style = {categoryCard}>

                                </View>
                                <Text style = {categoryNameText}>
                                    Electronics
                                </Text>

                            </View>


                            <View style = {specificCategoryRight}>
                                <View style = {categoryCard}>

                                </View>
                                <Text style = {categoryNameText}>
                                    Electronics
                                </Text>

                            </View>



                        </View>
                
                    </ScrollView>
                  
                  
                        
                    <TouchableOpacity
                        onPress = {this.onDonePress}
                        >
                    
                        <LinearGradient
                            start={{x: 0, y: 1}} end={{x: 1, y: 0}}
                            style= {doneCardView}
                            colors={['#cb2d3e', '#ef473a']}
                            > 

                            <Text style ={doneText}>
                                Done
                            </Text>

                            {/* <View style = {{
                                position: 'absolute',
                                ju
                            }}> */}
                            {/* <Feather

                                name = "arrow-right"
                                color = "white"
                                size = {height * 0.035}
                                /> */}

                            {/* </View> */}

                    </LinearGradient>

                    </TouchableOpacity>

                </View>
            </View>
            </SafeAreaView>
        </>
        );
    }
}

export default getStartedPage;

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
    questionView: {
        width: width * 0.8,
        marginTop: width * 0.02
    },
    questionViewTopicText: {
        fontSize: height * 0.032,
        fontFamily: "Montserrat-Medium",
        color: "rgba(0, 0, 0, 0.8)",
    },
    questionViewRequiredText: {
        color: 'red',
        fontFamily: "Montserrat-ExtraLightItalic",
        fontSize: height * 0.015 
      
    },
    questionViewRequiredSuperText: {
        color: 'red',
        fontFamily: "Montserrat-ExtraLightItalic",
        lineHeight:  height * 0.02,
        fontSize: height * 0.01 
    },
    questionViewInfoText: {
        fontSize: height * 0.02,
        paddingVertical: height * 0.005,
        textAlign: 'center',
        fontFamily: "Montserrat-Light",
        color: "rgba(0, 0, 0, 0.8)",
    },
    searchCardView: {
        backgroundColor: 'white',
        borderRadius: width * 0.08,
        shadowColor: 'black',
        shadowOffset: {width: 7, height: 7},
        shadowOpacity: 10,
        elevation: 7,
        marginVertical: width * 0.005,
        width: width * 0.7,
    },
 
    tripletCategoryView: {
        flexDirection: 'row',
        marginVertical: height * 0.015,
        paddingVertical: height * 0.015,
        justifyContent: 'space-between',
    },
    tripletBorder: {
        borderBottomWidth: height * 0.0005,
        borderBottomColor: 'rgba(191, 191, 191, 0.8)',
        width: width * 0.9,
        alignSelf: 'center'
    },
    specificCategoryLeftCenter: {
        borderRightWidth: height * 0.001,
        borderRightColor: 'rgba(191, 191, 191, 0.8)',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1
    },
    specificCategoryRight: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1
    },
    categoryCard: {
        borderWidth: height * 0.002,
        borderColor: 'rgba(191, 191, 191, 0.8)',
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.1,
        width: height * 0.1
    },
    categoryNameText: {
        fontSize: height * 0.02,
        textAlign: 'center',
        color: "rgba(0, 0, 0, 0.7)",
        fontFamily: "Montserrat-Medium"
    },
   
    doneText: {
        color: 'white',
        fontSize: height * 0.025,
        paddingHorizontal: height * 0.015,
        fontFamily: "Montserrat-Light"
    },
    
    doneCardView: {
        width: width * 0.9,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: height * 0.01,
        marginTop: height * 0.005
    },
  
})