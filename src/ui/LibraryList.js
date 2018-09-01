import React, {Component} from 'react';
import {connect} from 'react-redux';
import Reactotron from "reactotron-react-native";
import ListItem from "../components/ListItem";
import {ListView} from 'react-native';

/**
 * Created by Fatih Taşdemir on 1.09.2018
 */

class LibraryList extends Component {

    static renderRow(library) {
        return <ListItem library={library}/>;
    }

    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    render() {
        return (
            <ListView
                style={{marginTop: 10}}
                dataSource={this.dataSource}
                renderRow={LibraryList.renderRow}/>
        );
    }

}

const mapStateToProps = state => {
    Reactotron.log(state + ' state');
    return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);