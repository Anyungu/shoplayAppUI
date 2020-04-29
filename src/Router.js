


import React  from 'react';
import {Scene, Router} from 'react-native-router-flux';

import landingPage from './components/landingPage';
import getStartedPage from './components/getStartedPage';
import verifyPage from './components/verifyPage';
import singleItemPage from './components/singleItemPage';

const RouterComponent = () => {
    onBackPress = () => {    

        // const scene = Actions.currentScene;
        // if (scene === "landingPage" || scene === "finalHomePage" || scene === "registerSuccessPage" || scene === "adminHomePage" || scene === "spinnerPage") {
        //     BackHandler.exitApp();
        //     return true;
        // }
        // Actions.pop();
        // return true;
    }

    return(
        <Router backAndroidHandler={this.onBackPress}>
            <Scene key="root" hideNavBar>

                <Scene key="all">
                    
                    <Scene 
                    key = "landingPage" 
                    component= {landingPage}
                    hideNavBar
                    initial
                    /> 

                     <Scene 
                    key = "getStartedPage" 
                    component= {getStartedPage}
                    hideNavBar
                
                    /> 

                    <Scene
                    key = "verifyPage"
                    component = {verifyPage}
                    hideNavBar
                    />

                    <Scene
                    key = "singleItemPage"
                    component = {singleItemPage}
                    hideNavBar
                
                    />

                    
               </Scene>


                
                
            </Scene>
        </Router>
    );

};

export default RouterComponent;