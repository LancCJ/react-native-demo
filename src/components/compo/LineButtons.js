/**
 * Created by lanccj on 17/3/8.
 */
import React, {Component} from 'react';
import {
    Text,
    ListView,
    View
} from 'react-native';

// Consts and Libs
import { AppSizes,AppStyles } from '@theme/';
import RowDataView from '@components/compo/RowDataView';

//3rd lib
import {normalize } from 'react-native-elements'
import GridView from 'react-native-grid-view'

var listModelData=require('@data/listModels.json')

/**
 *一行4个图标组件
 */
export default class LineButtons extends Component {
    constructor(props) {
        super(props);
        var modelds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            modelDataSource: listModelData.data,
        };
    }

    renderRowView=(rowData,type)=>{
        return(
            <RowDataView
                key={rowData.id}
                data={rowData}
                type={type}
            />
        )
    }

    render() {
        return (
            <View style={[AppStyles.container]}>
                <GridView
                    items={this.state.modelDataSource}
                    itemsPerRow={4}
                    renderItem={(rowData) => this.renderRowView(rowData,'models')}
                />
            </View>
        )
    }
}


