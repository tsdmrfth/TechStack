import React, {Component} from 'react';
import {Text} from 'react-native';
import {CardSection} from './common';
import {connect} from 'react-redux';

/**
 * Created by Fatih Taşdemir on 1.09.2018
 */

class ListItem extends Component {

    render() {

        const {titleStyle} = styles;

        return (

            <CardSection>

                <Text style={titleStyle}>

                    {this.props.library.title}

                </Text>

            </CardSection>

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

export default connect(mapStateToProps)(ListItem);