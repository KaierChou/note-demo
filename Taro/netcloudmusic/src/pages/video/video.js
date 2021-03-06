import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text ,Image } from '@tarojs/components'

import VIDEOBG from '../../asset/images/videopage.png'
import './video.scss'

class Video extends Component {

  config = {
    navigationBarTitleText: '视频'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='videoPage'>
        <Image src={VIDEOBG}></Image>
      </View>
    )
  }
}

export default Video
