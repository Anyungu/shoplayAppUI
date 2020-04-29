import React, {Component} from 'react';

import {
View,
Text,
StyleSheet,
Dimensions,
StatusBar,
SafeAreaView,
Image,
TouchableOpacity,
Animated,
PanResponder
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import RangeSlider from 'rn-range-slider';



class singleItemPage extends Component {

    constructor (props) {
        const {
            height
           } = Dimensions.get('screen');

        super(props);

        //animations
        this.positionForProductInfoHolderTop = new Animated.Value(height * 0.275);
        this.bottomPositionForFilter = new Animated.Value(0);
        this.opacityForCircularCards = new Animated.Value(1);
        this.opacityForProductInfoLineBreak = new Animated.Value(0);
        this.opacityForFilterCardContents = new Animated.Value(0);
        this.opacityForFilterOverlay = new Animated.Value(0);
        this.bottomForFilterOverlay = new Animated.Value(0);
        this.positionForProductInfoCard = new Animated.ValueXY({
            x: 0,
            y: (height * 0.835) - (height * 0.275)
        });

        //functions
        this.onInfoButtonPress = this.onInfoButtonPress.bind(this);
        this.onXProductInfoPress = this.onXProductInfoPress.bind(this);
        this.onFilterButtonPress = this.onFilterButtonPress.bind(this);
        this.onXFilterPress = this.onXFilterPress.bind(this);
        this.onGenderBothClick = this.onGenderBothClick.bind(this);
        this.onGenderMaleClick = this.onGenderMaleClick.bind(this);
        this.onGenderFemaleClick = this.onGenderFemaleClick.bind(this);
        this.onViewCategoryClick = this.onViewCategoryClick.bind(this);
        this.onViewMixedClick = this.onViewMixedClick.bind(this);
        this.onFilterSetPress = this.onFilterSetPress.bind(this);
      

        //panResponders
        this.panResponderForProductInfoCard = PanResponder.create({
            onStartShouldSetPanResponder: () => true,

            onPanResponderMove: (e, g) => {

                var ours = (height * 0.835) - (height * 0.275);
                // console.log(ours);
                // console.log((height * 0.835) - (height * 0.675));
                // console.log((ours) + g.dy )

                if (g.dy != 0) {
           
                if ((ours) + g.dy >= (height * 0.835) - (height * 0.675) &&  (ours) + g.dy <= ours) {

                    this.positionForProductInfoCard.setValue({
                        x: 0,
                        y: (ours) + g.dy
                    });

                    this.positionForProductInfoHolderTop.setValue((height * 0.275) - g.dy);

                    this.opacityForCircularCards.setValue(((height * 0.56) + g.dy)/((height * 0.56)+(height * 0.16)));

                    this.opacityForProductInfoLineBreak.setValue(1-((height * 0.56) + g.dy)/((height * 0.56)+(height * 0.16)));

                }
            }

              
              },
              onPanResponderRelease: (e, g) => {

                var ours = (height * 0.835) - (height * 0.275);
                var oursH = (height * 0.835) - (height * 0.675);

               
                if (g.dy != 0 ) {

                if ((ours) + g.dy >= (ours - oursH)/2 && ours + g.dy <= ours) {

                   
                    this.onInfoButtonPress()
                }
                else {

                    this.onXProductInfoPress()
                }
               
            }
            }
        })

    }

    state = {

        showViewFilterContainer: true,
        selectedViewName: 'Mixed Grill',
        selectedViewDisplay: 'Mixed Grill',
        genderBothColor: '#ef473a',
        genderBothTextColor: 'white',
        genderMaleColor: 'white',
        genderMaleTextColor: '#ef473a',
        genderFemaleColor: 'white',
        genderFemaleTextColor: '#ef473a',
        viewCategoryColor: 'white',
        viewCategoryTextColor: '#ef473a',
        viewMixedColor: '#ef473a',
        viewMixedTextColor: 'white'

    }

    onGenderMaleClick() {
        this.setState({

            genderBothColor: 'white',
            genderBothTextColor: '#ef473a',
            genderMaleColor: '#ef473a',
            genderMaleTextColor: 'white',
            genderFemaleColor: 'white',
            genderFemaleTextColor: '#ef473a',
         
        })
    }

    onGenderFemaleClick() {
        this.setState({

            genderBothColor: 'white',
            genderBothTextColor: '#ef473a',
            genderFemaleColor: '#ef473a',
            genderFemaleTextColor: 'white',
            genderMaleColor: 'white',
            genderMaleTextColor: '#ef473a',
         
        })
    }

    onGenderBothClick() {
        this.setState({

            genderBothColor: '#ef473a',
            genderBothTextColor: 'white',
            genderMaleColor: 'white',
            genderMaleTextColor: '#ef473a',
            genderFemaleColor: 'white',
            genderFemaleTextColor: '#ef473a',
         
        })
    }

    onViewMixedClick() {
        this.setState({

            viewCategoryColor: 'white',
            viewCategoryTextColor: '#ef473a',
            viewMixedColor: '#ef473a',
            viewMixedTextColor: 'white',
            selectedViewName: 'Mixed Grill'

        })
    }


    onViewCategoryClick() {
        this.setState({

            viewCategoryColor: '#ef473a',
            viewCategoryTextColor: 'white',
            viewMixedColor: 'white',
            viewMixedTextColor: '#ef473a',
            selectedViewName: 'Category'

        })
    }

    onFilterSetPress() {
        this.setState({
            selectedViewDisplay: this.state.selectedViewName
        })

        this.onXFilterPress();
    }

    showOrHideViewFilterContainer() {

        const {showViewFilterContainer} = this.state;

        const {
            upperViewFilterContainer,
            upperViewFilterText,
        } = styles;

        if (showViewFilterContainer) {
            return(
                <View style = {upperViewFilterContainer}>
                             
                <Text style = {upperViewFilterText}>
                    {this.state.selectedViewDisplay}
                </Text>
            
                
                <TouchableOpacity 
                onPress = {this.onFilterButtonPress}
                style = {{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <AntDesign
                        name = "filter"
                        color = "white"
                        size = {height * 0.025}
                    />
                    
                     <Text style = {upperViewFilterText}>
                        Filter
                    </Text>

                </TouchableOpacity>
               

            </View>
            );
        }
    }

    onFilterButtonPress() {

        const {
            height
           } = Dimensions.get('screen');

           Animated.parallel([
            Animated.timing(this.bottomPositionForFilter, {
    
                toValue: height * 0.4,
                duration: 1000
    
            }),
            Animated.timing(this.opacityForFilterCardContents, {

                toValue: 1,
                duration: 600,
                delay: 400
    
            }),
            Animated.timing(this.opacityForFilterOverlay, {

                toValue: 0.9,
                duration: 1000,  
    
            }),
            Animated.timing(this.bottomForFilterOverlay, {
                toValue: height * 0.835,
                duration: 10
            })
        
          ]).start(()=> {
    
          })


    }

    onXFilterPress() {

        const {
            height
           } = Dimensions.get('screen');

           Animated.sequence([

            Animated.parallel([
                Animated.timing(this.bottomPositionForFilter, {
        
                    toValue: 0,
                    duration: 600
        
                }),
                Animated.timing(this.opacityForFilterCardContents, {
    
                    toValue: 0,
                    duration: 300,
                    delay: 200
        
                }),
                Animated.timing(this.opacityForFilterOverlay, {
    
                    toValue: 0,
                    duration: 600,
                   
                }),    
            
              ]),
              Animated.timing(this.bottomForFilterOverlay, {
                toValue: 0,
                duration: 10,
              
            })

           ]).start(() => {
              
           })

         

    }


    onInfoButtonPress() {

        const {
            height
           } = Dimensions.get('screen');

           this.setState({
            showViewFilterContainer: false
        })

      Animated.parallel([
        Animated.timing(this.positionForProductInfoHolderTop, {

            toValue: height * 0.675,
            duration: 600

        }),
        Animated.timing(this.opacityForCircularCards, {

            toValue: 0,
            duration: 400,
            delay: 200

        }),
        Animated.timing(this.opacityForProductInfoLineBreak, {
            toValue: 1,
            duration: 800,
            delay: 600
        }),
        Animated.timing(this.positionForProductInfoCard, {
            toValue: {
                x: 0,
                y: height * 0.16
            },
            duration: 600
        })
      ]).start(()=> {

           
      })
    }

    onXProductInfoPress() {


        const {
            height
            } = Dimensions.get('screen');

            this.setState({
                showViewFilterContainer: true
            })
    
          Animated.parallel([
            Animated.timing(this.positionForProductInfoHolderTop, {
    
                toValue: height * 0.275,
                duration: 800,
            
            }),
            Animated.timing(this.opacityForCircularCards, {
    
                toValue: 1,
                duration: 800,
                delay: 200
    
            }),
            Animated.timing(this.opacityForProductInfoLineBreak, {
                toValue: 0,
                duration: 400,
              
            }),
            Animated.timing(this.positionForProductInfoCard, {
                toValue: {
                    x: 0,
                    y: height * 0.56
                },
                duration: 800
            })
          ]).start(()=> {

          
    
          })
        

    }

    filterCardBalancingViewStyling() {
        const opacity = this.opacityForFilterCardContents;

        return {
            opacity
        }
    }

    filterCardStyling() {
        const height = this.bottomPositionForFilter;

        return {
            height
        }

    }


    productInfoCardStyling() {

        const height = this.positionForProductInfoHolderTop;
        const pos = this.positionForProductInfoCard;

      

        return {
            ...pos.getLayout(),
            height
        }
        
    }

    productInfoLineBreakstyling() {
        const opacity = this.opacityForProductInfoLineBreak

        return {
            opacity
        }
    }

    circularCardsOpacityStyling() {

        const opacity = this.opacityForCircularCards;

        return {
            opacity
        }
    }

    filterOverlayStyling() {
        const opacity = this.opacityForFilterOverlay;
        const height = this.bottomForFilterOverlay;

        return {
            opacity,
            height
        }

    }
    render() {

        const {
            mainContainer,
            upperPart,
            lowerPart,
            productContainer,
            bottomTab,
            imageStyle,
            productInfoContainer,
            xCircularButtonCard,
            iCircularButtonCard,
            lCircularButtonCard,
            productNamePriceTextView,
            nameAndPriceText,
            productDescText,
            productInfoLineBreak,
            moreImageCard,
            moreImagesView,
            specificationProductHeaderText,
            specificationProductText,
            barOnProductInfoCard,
            filterDrawer,
            filterDrawerFirstLineBalancingView,
            filterDrawerFirstLineView,
            filterDrawerHeaderTextStyle,
            filterDrawerOtherHeaderTextStyle,
            filterDrawerButtonsLineView,
            leftFilterButton,
            centerFilterButton,
            rightFilterButton,
            filterButtonText,
            overlayForFilter,
            touchableOverlay,
            filterDrawerSliderLineView,
            filterSetButton,
            filterSetButtonText
        } = styles;

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
                           {this.showOrHideViewFilterContainer()}

                        </LinearGradient>

                     
                        <View style = {lowerPart}>
                            <LinearGradient 
                                start={{x: 0, y: 1}} end={{x: 1, y: 0}}
                                style= {bottomTab}
                                colors={['#cb2d3e', '#ef473a']}
                                >

                                    <TouchableOpacity>
                                    <MaterialIcons
                                        name = "explore"
                                        color = "white"
                                        size = {height * 0.055}
                                    />
                                    </TouchableOpacity>


                                    <TouchableOpacity>
                                    <EvilIcons
                                        name = "search"
                                        color = "white"
                                        size = {height * 0.055}
                                    />
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                    <AntDesign
                                        name = "message1"
                                        color = "white"
                                        size = {height * 0.055}
                                    />
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                     <MaterialIcons
                                        name = "person-outline"
                                        color = "white"
                                        size = {height * 0.055}
                                    />
                                    </TouchableOpacity>


                            </LinearGradient>
                        </View>
                        <View style = {productContainer}>

                            <Image 
                                source = {require('../../assets/images/shoe.jpg')} 
                                style = {imageStyle}
                           
                            />

                            {/* <Animated.View style  = {[xOnImage, this.productInfoLineBreakstyling()]}>
                                <TouchableOpacity onPress = {this.onXProductInfoPress}>
                                    <Entypo
                                            name = "cross"
                                            color = "rgba(26,34,98,0.5)"
                                            size = {height * 0.045}
                                        />

                                </TouchableOpacity>
                            </Animated.View> */}

                         


                            <Animated.View 
                               {...this.panResponderForProductInfoCard.panHandlers}
                              style = {[productInfoContainer, this.productInfoCardStyling()]}>

                                <Animated.View style = {[barOnProductInfoCard, this.productInfoLineBreakstyling()]}/>

                                <Animated.View style  = {[xCircularButtonCard, this.circularCardsOpacityStyling()]}>
                                <TouchableOpacity>
                                    <Entypo
                                            name = "cross"
                                            color = "red"
                                            size = {height * 0.065}
                                        />

                                </TouchableOpacity>
                                </Animated.View>

                                <Animated.View style  = {[iCircularButtonCard, this.circularCardsOpacityStyling()]}>
                                  <TouchableOpacity
                                    onPress = {this.onInfoButtonPress}
                                  >

                                   <Entypo
                                            name = "info-with-circle"
                                            color = "red"
                                            size = {height * 0.065}
                                        />

                                </TouchableOpacity>
                                </Animated.View>

                                <Animated.View style  = {[lCircularButtonCard, this.circularCardsOpacityStyling()]}>
                                 <TouchableOpacity>

                                    <Entypo
                                            name = "heart"
                                            color = "red"
                                            size = {height * 0.065}
                                        />

                                </TouchableOpacity>
                                </Animated.View>

                                <View style = {productNamePriceTextView}>
                                    <Text style= {nameAndPriceText}>
                                        Product Name
                                    </Text>

                                    <Text style= {nameAndPriceText}>
                                        KES 999,999
                                    </Text>
                                </View>
                                <Text style = {productDescText}>

                                Firebase is Google’s client side application development platform, with a mission to help app developers of all sizes (large or small) succeed with their products

                                </Text>

                                <Animated.View style = {[productInfoLineBreak, this.productInfoLineBreakstyling() ]}/>

                                <Animated.View style = {[moreImagesView, this.productInfoLineBreakstyling()]}>
                                    <View style = {moreImageCard}>

                                    </View>

                                    <View style = {moreImageCard}>

                                    </View>

                                    <View style = {moreImageCard}>

                                    </View>
                                </Animated.View>

                                <Animated.Text style = {[specificationProductHeaderText, this.productInfoLineBreakstyling()]}>
                                    Specifications
                                </Animated.Text>

                                 <Animated.Text style = {[specificationProductText, this.productInfoLineBreakstyling()]}>
                                    Lorum ipsum dolor sit amet.
                                </Animated.Text>

                                <Animated.Text style = {[specificationProductText, this.productInfoLineBreakstyling()]}>
                                    Lorum ipsum dolor sit amet.
                                </Animated.Text>

                                <Animated.Text style = {[specificationProductText, this.productInfoLineBreakstyling()]}>
                                    Lorum ipsum dolor sit amet.
                                </Animated.Text>

                                <Animated.Text style = {[specificationProductText, this.productInfoLineBreakstyling()]}>
                                    Lorum ipsum dolor sit amet.
                                </Animated.Text>


                                <Animated.Text style = {[specificationProductText, this.productInfoLineBreakstyling()]}>
                                    Lorum ipsum dolor sit amet.
                                </Animated.Text>

                                <Animated.Text style = {[specificationProductHeaderText, this.productInfoLineBreakstyling()]}>
                                    Shop Name
                                </Animated.Text>

                                 <Animated.Text style = {[specificationProductText, this.productInfoLineBreakstyling()]}>
                                    Lorum ipsum dolor sit amet.
                                </Animated.Text>



                            </Animated.View>


                            <Animated.View style = {[overlayForFilter, this.filterOverlayStyling()]}> 

                                <TouchableOpacity 
                                    onPress = {this.onXFilterPress}
                                    style = {touchableOverlay}

                                />
                            </Animated.View>

                           
                        </View>


                        <Animated.View style = {[filterDrawer, this.filterCardStyling()]}>
                                <Animated.View style = {[filterDrawerFirstLineView, this.filterCardBalancingViewStyling()]}>
                                
                                    <TouchableOpacity 
                                        style = {filterDrawerFirstLineBalancingView}
                                        onPress = {this.onXFilterPress}>
                                            <Entypo
                                                    name = "cross"
                                                    color = "rgba(26,34,98,0.5)"
                                                    size = {height * 0.035}
                                                />

                                    </TouchableOpacity>

                                    <View style = {filterDrawerFirstLineBalancingView}>
                                        <Text style = {filterDrawerHeaderTextStyle}>
                                            Filter
                                        </Text>
                                    </View>

                                    <View style = {filterDrawerFirstLineBalancingView}/>
                               

                                </Animated.View>

                                <Animated.Text style = {[filterDrawerOtherHeaderTextStyle, this.filterCardBalancingViewStyling()]}>
                                        Gender
                                </Animated.Text>

                                <Animated.View style = {[filterDrawerButtonsLineView, this.filterCardBalancingViewStyling()]}>
                                    
                                    <TouchableOpacity
                                    style = {{ ...leftFilterButton, ...{backgroundColor: this.state.genderFemaleColor}}}
                                    onPress = {this.onGenderFemaleClick}
                                    >
                                         <Text style = {{...filterButtonText, ...{color: this.state.genderFemaleTextColor}}}>
                                            Female
                                        </Text>
                                    </TouchableOpacity>

                                     <TouchableOpacity
                                     onPress = {this.onGenderMaleClick}
                                        style = {{...centerFilterButton, ...{backgroundColor: this.state.genderMaleColor}}}
                                    >
                                          <Text style = {{...filterButtonText, ...{color: this.state.genderMaleTextColor}}}>
                                            Male
                                        </Text>
                                    </TouchableOpacity>

                                     <TouchableOpacity
                                     onPress = {this.onGenderBothClick}
                                        style = {{...rightFilterButton, ...{backgroundColor: this.state.genderBothColor}}}
                                    >
                                        <Text style = {{...filterButtonText, ...{color: this.state.genderBothTextColor}}}>
                                            Both
                                        </Text>
                                    </TouchableOpacity>
                                </Animated.View>


                                <Animated.Text style = {[filterDrawerOtherHeaderTextStyle, this.filterCardBalancingViewStyling()]}>
                                        View
                                </Animated.Text>


                                   <Animated.View style = {[filterDrawerButtonsLineView, this.filterCardBalancingViewStyling()]}>
                                    
                                        <TouchableOpacity
                                        onPress = {this.onViewCategoryClick}
                                        style = {{...leftFilterButton, ...{backgroundColor: this.state.viewCategoryColor}}}
                                        >
                                             <Text style = {{...filterButtonText, ...{color: this.state.viewCategoryTextColor}}}>
                                                Category
                                            </Text>
                                        </TouchableOpacity>


                                        <TouchableOpacity
                                        onPress = {this.onViewMixedClick}
                                        style = {{...rightFilterButton, ...{backgroundColor: this.state.viewMixedColor}}}
                                        >
                                              <Text style = {{...filterButtonText, ...{color: this.state.viewMixedTextColor}}}>
                                                Mixed Grill
                                            </Text>
                                        </TouchableOpacity>
                                </Animated.View>

                                  <Animated.Text style = {[filterDrawerOtherHeaderTextStyle, this.filterCardBalancingViewStyling()]}>
                                        Price
                                </Animated.Text>

                                <Animated.View style = {[filterDrawerSliderLineView, this.filterCardBalancingViewStyling()]}>
                                <RangeSlider
                                        style={{width: width * 0.8, height: height * 0.1}}
                                        gravity={'center'}
                                        min={1000}
                                        max={999000}
                                        step={10}
                                        selectionColor="#cb2d3e"
                                        blankColor="#eeeeee"
                                        onValueChanged={(low, high, fromUser) => {
                                            // this.setState({rangeLow: low, rangeHigh: high})
                                        }}/>
                                </Animated.View>

                                 <Animated.View style = {[filterDrawerSliderLineView, this.filterCardBalancingViewStyling()]}>
                                        <TouchableOpacity
                                          onPress = {this.onFilterSetPress}
                                        >
                                            <LinearGradient
                                                start={{x: 1, y: 1}} end={{x: 0, y: 0}}
                                                style= {filterSetButton}
                                                colors={['#cb2d3e', '#ef473a']}
                                                >
                                                
                                                <Text style = {filterSetButtonText}>
                                                    Set
                                                </Text>
                                            
                                            </LinearGradient>
                                        </TouchableOpacity>
                                        
                                </Animated.View>



                        </Animated.View> 
                    </View>
                </SafeAreaView>
            </>
        );
    }
}

export default singleItemPage;

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
       },
       upperViewFilterContainer: {
            paddingTop: height * 0.02,
            paddingHorizontal: width * 0.06,
            flexDirection: 'row',
            justifyContent: 'space-between',
       },
       upperViewFilterText: {
        fontSize: height * 0.025,
        textAlign: 'center',
        color: "rgba(255, 255, 255, 0.7)",
        fontFamily: "Montserrat-Medium"
        },
       filterContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:'center'
       },
       lowerPart: {
           flex: 2,
           alignItems: 'center',
           justifyContent: 'flex-end'
       },
       bottomTab: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: width * 0.035,
            width: width,
            paddingVertical: height * 0.005
       },
       
       productContainer: {
           position: 'absolute',
           top: height * 0.055,
           left: width * 0.035,
           borderRadius: width * 0.1,
           width: width * 0.935,
           height: height * 0.835, 
        //    backgroundColor: 'white'
       },
       productInfoContainer: {
            borderRadius: width * 0.1,
            backgroundColor: 'white',
            position: 'absolute',
            width: width * 0.935,
            height: height * 0.275,
            bottom: 0,
            right: 0,
        
       },
       barOnProductInfoCard: {
            marginTop: width * 0.025,
            width: width * 0.1,
            borderBottomColor: 'rgba(0,0,0,0.4)',
            alignSelf: 'center',
            borderBottomWidth: height * 0.005,
       },
       productNamePriceTextView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal:width * 0.075,
            paddingTop: height * 0.045,
            paddingBottom: height * 0.0065,
       },
       productInfoLineBreak: {
            borderBottomColor: 'rgba(0,0,0,0.4)',
            borderBottomWidth: height * 0.001,
            width: width * 0.8,
            alignSelf: 'center',
            marginVertical: height * 0.015
       },
       moreImagesView: {
           flexDirection: 'row',
           justifyContent: 'space-evenly'
       },
       moreImageCard: {
            borderColor: 'rgba(0,0,0,0.4)',
            borderWidth: height * 0.001,
            height: width * 0.2,
            width: width * 0.2
       },
       nameAndPriceText: {
            fontSize: height * 0.025,
            textAlign: 'center',
            color: "rgba(0,0,0, 0.7)",
            fontFamily: "Montserrat-Medium",
            
       },
       specificationProductHeaderText: {
        fontSize: height * 0.025,
        color: "rgba(0,0,0, 0.7)",
        fontFamily: "Montserrat-Medium",
        paddingTop: height * 0.005,
        paddingHorizontal:width * 0.075,
       },
       specificationProductText: {
        fontSize: height * 0.022,
        color: "rgba(0,0,0, 0.7)",
        fontFamily: "Montserrat-Light",
        paddingHorizontal:width * 0.075,
       },

       productDescText: {
            fontSize: height * 0.022,
            // textAlign: 'center',
            color: "rgba(0,0,0, 0.7)",
            fontFamily: "Montserrat-Light",
            paddingHorizontal:width * 0.075,

       },
       xCircularButtonCard: {
            backgroundColor: 'white',
            position: 'absolute',
            width: width * 0.15,
            height: width * 0.15,
            borderRadius: width * 0.15 * 0.5,
            left: width - (width * 0.935) +  (width * 0.15/2),
            bottom:  (height * 0.275) - (width * 0.15/2),
            shadowColor: 'black',
            shadowOffset: {width: 6, height: 6 },
            shadowOpacity: 1.0,
            elevation: 7,
            alignItems: 'center',
            justifyContent: 'center'
       },

        iCircularButtonCard: {
            backgroundColor: 'white',
            position: 'absolute',
            width: width * 0.15,
            height: width * 0.15,
            borderRadius: width * 0.15 * 0.5,
            left: (width * 0.935/2) - (width * 0.15/2),
            bottom:  (height * 0.275) - (width * 0.15/2),
            shadowColor: 'black',
            shadowOffset: {width: 6, height: 6 },
            shadowOpacity: 1.0,
            elevation: 7,
            alignItems: 'center',
            justifyContent: 'center'
        },

        lCircularButtonCard: {
            backgroundColor: 'white',
            position: 'absolute',
            width: width * 0.15,
            height: width * 0.15,
            borderRadius: width * 0.15 * 0.5,
            right: width - (width * 0.935) +  (width * 0.15/2),
            bottom:  (height * 0.275) - (width * 0.15/2),
            shadowColor: 'black',
            shadowOffset: {width: 6, height: 6 },
            shadowOpacity: 1.0,
            elevation: 7,
            alignItems: 'center',
            justifyContent: 'center'
        },

       imageStyle: {
        borderRadius: width * 0.15,
        width: width * 0.935,
        height: height * 0.835,
       },

       filterDrawer: {
           position: 'absolute',
           width: width,
           borderBottomLeftRadius: width * 0.1,
           borderBottomRightRadius: width * 0.1,
           backgroundColor: 'white',
           left: 0,
           top: 0,
      
       },
       
       filterDrawerFirstLineView: {
           paddingVertical: height * 0.0025,
           flexDirection: 'row',
           paddingHorizontal: width * 0.025,
        //    justifyContent: 'space-evenly'
       },
       filterDrawerFirstLineBalancingView: {
        flex: 1
        },
        filterDrawerHeaderTextStyle: {
            color: 'rgba(0,0,0,1)',
            textAlign: 'center',
            fontFamily: "Montserrat-Medium",
            fontSize: height * 0.025,
        },
        filterDrawerOtherHeaderTextStyle: {
            color: 'rgba(0,0,0,0.6)',
            fontFamily: "Montserrat-Medium",
            fontSize: height * 0.025,
            paddingHorizontal: width * 0.1

        },
        filterDrawerButtonsLineView: {

            backgroundColor: 'white',
            flexDirection: 'row',
            marginHorizontal: width * 0.1,
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 5 },
            shadowRadius: 50,
            shadowOpacity: 1.0,
            elevation: 4,
            borderRadius: width * 0.025,
            justifyContent: 'center',
            alignItems: 'center'
          
        },

        filterDrawerSliderLineView: {
            paddingVertical: height * 0.0025,
            marginHorizontal: width * 0.1,
            justifyContent: 'center',
            alignItems: 'center'
        },
       
        leftFilterButton: {
        
            borderRightWidth: width * 0.0025,         
            alignItems: 'center',  
            flex: 1,
            borderBottomLeftRadius: width * 0.025,
            borderTopLeftRadius: width * 0.025,
            paddingVertical: height * 0.0025,
           
        },
        centerFilterButton: {
            borderLeftColor: 'rgba(0,0,0,07)',
            borderRightColor: 'rgba(0,0,0,07)',
            alignItems: 'center',
            flex: 1,
            paddingVertical: height * 0.0025,
         
        },
        rightFilterButton: {
        
            borderLeftWidth: width * 0.0025,
            alignItems: 'center',
            flex: 1,
            borderBottomRightRadius: width * 0.025,
            borderTopRightRadius: width * 0.025,
            paddingVertical: height * 0.0025,
        
        },
        filterButtonText: {
            color: 'red',
            fontSize: height * 0.025,
            fontFamily: "Montserrat-Light"
        },
        overlayForFilter: {
            position: 'absolute',
            left: 0,
            top: 0,
            backgroundColor: '#EFD8DB',
            right: 0
          },
          touchableOverlay: {
              flex: 1
          },
          filterSetButton: {
            width: width * 0.3,
            borderRadius: width * 0.1,
            borderRadius: width * 0.1,
            paddingVertical: height * 0.0125,
            alignItems:'center',
            justifyContent: 'center'
          },
          filterSetButtonText: {
            fontSize: height * 0.02,
            color: 'white',
            fontFamily: "Montserrat-Light"
          }
    });   
