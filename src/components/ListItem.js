import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {CardSection} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Reactotron from "reactotron-react-native";

/**
 * Created by Fatih Taşdemir on 1.09.2018
 */

class ListItem extends Component {

    render() {

        const {titleStyle} = styles;
        Reactotron.log(JSON.stringify(this.props) + ' props');
        const {title, id} = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );

    }

}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    descriptionStyle: {
        paddingLeft: 10,
        paddingRight: 10
    }
};

const mapStateToProps = state => {
    return {selectedLibraryId: state.selectedLibraryId};
};

export default connect(mapStateToProps, actions)(ListItem);