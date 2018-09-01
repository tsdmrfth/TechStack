import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

/**
 * Created by Fatih Taşdemir on 1.09.2018
 */

class App extends Component{

    render(){
        return(
            <Provider store={createStore}>
                <View/>
            </Provider>
        );
    }

}

export default App;


