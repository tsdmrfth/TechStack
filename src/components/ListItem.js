import React, {Component} from 'react';
import {LayoutAnimation, Text, TouchableWithoutFeedback, View} from 'react-native';
import {CardSection} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Reactotron from "reactotron-react-native";

/**
 * Created by Fatih Taşdemir on 1.09.2018
 */

class ListItem extends Component {

    componentWillUpdate() {
        const CustomLayoutSpring = {
            duration: 200,
            create: {
                type: LayoutAnimation.Types.spring,
                property: LayoutAnimation.Properties.opacity,
                springDamping: 0.4,
            },
            update: {
                type: LayoutAnimation.Types.spring,
                springDamping: 0.4,
            },
        };

        LayoutAnimation.configureNext(CustomLayoutSpring)
    }

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
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );

    }

    renderDescription() {
        const {library, shouldExpandDescription} = this.props;

        if (shouldExpandDescription) {
            return (
                <CardSection>
                    <Text>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
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

const mapStateToProps = (state, ownProps) => {
    const shouldExpandDescription = ownProps.library.id === state.selectedLibraryId;
    return {shouldExpandDescription};
};

export default connect(mapStateToProps, actions)(ListItem);