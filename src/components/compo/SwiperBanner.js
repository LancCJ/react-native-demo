/**
 * Created by lanccj on 17/3/8.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Alert
} from 'react-native';

// Consts and Libs
import { AppSizes,AppStyles } from '@theme/';

//3rd lib
import Swiper from 'react-native-swiper'
import { SearchBar,normalize } from 'react-native-elements'

/**
 *图文轮播
 */
export default class SwiperBanner extends Component {
    render() {
        return (
        <View style={[AppStyles.container]}>
            <SearchBar
                lightTheme
                containerStyle={{
                    borderBottomColor: 'transparent',
                    borderTopColor: 'transparent',
                    backgroundColor: 'transparent',
                    //marginTop:-(AppSizes.screen.heightThird/20*19)
                }}
                inputStyle={{
                    backgroundColor:'#FFFFFF',
                    color:'#020202',
                    fontSize: normalize(12)
                }}
                placeholder='搜索发现更多内容...'/>
            <Swiper
                width={AppSizes.screen.width}
                height={AppSizes.screen.heightQuarter}
                dotColor="#F5F5F5"
                autoplay={true}

            >
                <View >
                    <Image
                        style={AppStyles.swiperBannerImage}
                        source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489223652&di=65811b41c720ff7121cd5de80dc67f93&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.hainan.gov.cn%2Fhn%2Fyw%2Fxwlb%2F201605%2FW020160531314347031387.png'}}
                    />
                </View>
                <View >
                    <Image
                        style={AppStyles.swiperBannerImage}
                        source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489223680&di=4cc7e8a0862f0294bcf951817f581cfa&imgtype=jpg&er=1&src=http%3A%2F%2Fi02.cztv.com%2F2015%2F05%2F5cf5691b-e26e-d53a-eb0a-c5b4ed4296fd_t.jpg'}}
                    />
                </View>
                <View >
                    <Image
                        style={AppStyles.swiperBannerImage}
                        source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489223722&di=73a217d15dbe0bf085ecaff2e359f842&imgtype=jpg&er=1&src=http%3A%2F%2Fimage100.360doc.com%2FDownloadImg%2F2016%2F10%2F0500%2F81550050_2.jpg'}}
                    />
                </View>
            </Swiper>



        </View>
        )
    }
}


