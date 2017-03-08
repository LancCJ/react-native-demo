/**
 * Created by lanccj on 2017/3/4.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

// Consts and Libs
import { AppSizes,AppStyles } from '@theme/';

//引入自定义组件

//模拟数据

//3rd lib
import { Actions } from 'react-native-router-flux'

class RowDataView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render = () => (
            this.props.type==='news'?(
                    <View style={[AppStyles.COLUMN_CONTAINER,{borderBottomColor:'#F2F2F2',borderBottomWidth:2,padding:AppSizes.screen.width*0.01}]}>
                        <View style={[AppStyles.ROW_CONTAINER]}>
                            <View style={[AppStyles.listNewsRowContent]}>
                                <Text style={[{flex:2,marginLeft:AppSizes.screen.width*0.04}]} numberOfLines={1}>{this.props.data.title}</Text>
                                <Text style={[{flex:4,color:'#6F6E6A'}]} numberOfLines={3}>    {this.props.data.content}</Text>
                                <View style={[AppStyles.ROW_CONTAINER,{flex:1,justifyContent:'flex-end'}]}>
                                    <Text style={[{fontSize:AppSizes.screen.width*0.02}]}>{this.props.data.time}</Text>
                                    <Text style={[{fontSize:AppSizes.screen.width*0.02}]}>阅读({this.props.data.read})</Text>
                                </View>
                            </View>
                            <Image
                                style={[AppStyles.listNewsRowImage]}
                                source={{uri: this.props.data.thumbnail}}
                            />
                        </View>
                    </View>
                ):
                this.props.type==='models'?
                (
                    <TouchableOpacity onPress={()=>Alert.alert('HELLO')}>
                        <View style={AppStyles.innerViewStyle}>
                            <Image source={{uri:this.props.data.thumbnail}} style={AppStyles.iconStyle}/>
                            <Text style={[{color:'#6F6E6A',fontSize:8,marginTop:5}]}>{this.props.data.title}</Text>
                        </View>
                    </TouchableOpacity>
                ):(
                    <TouchableOpacity onPress={()=>
                                                       Actions.MailDetailPage({"data":this.props.data})
                    }>
                        <View style={[AppStyles.mailViewStyle,AppStyles.ROW_CONTAINER]}>
                            <Image
                                style={[AppStyles.listMailRowImage]}
                                source={{uri: 'mail'}}
                            />
                            <View style={[AppStyles.mailInfo]}>
                                <Text numberOfLines={1}>标题:{this.props.data.title}</Text>
                                <Text>回复人:{this.props.data.reply}</Text>
                                <Text>发件日期:{this.props.data.time}</Text>
                            </View>
                            <View style={[AppStyles.mailDetailButtonView]}>
                                <Text style={[AppStyles.mailDetailButton]}>邮件详情</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    )
    )
}

export default RowDataView;