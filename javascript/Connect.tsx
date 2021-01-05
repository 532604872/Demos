/**
 @Description: WebSocket链接
 @Author: zero
 @Date: 2020-12-09 19:34:16
 @LastEditors: zero
 @LastEditTime: 2020-12-09 19:34:16
*/

import Media, { scan_success } from '@media'
import { event, closeApp } from '@utils'
import { Modal } from 'antd'
import { setMessage } from './webSocketSlice'

const COUNT = 10 // 次数

export default class Connect {
  count: number = COUNT
  timeout: any
  ws: any
  constructor(store: any, urlConfig:string) {
    this.count = COUNT
    clearTimeout(this.timeout)
    this.connect(store, urlConfig)
  }

  connect(store: any, urlConfig:string) {
    // 模拟 onmessage
    // setInterval(() => {
    //   store.dispatch(setMessage({ key: 'scale', value: '123' }))
    // }, 3000)
    try {
      this.ws = new WebSocket(urlConfig)
      this.ws.onopen = (e: any) => {
        console.log('WebSocket连接成功', e)
        event.trigger('hideLoading')
        clearTimeout(this.timeout)
      }
      this.ws.onclose = (e: any) => {
        console.error('WebSocket关闭链接:', e)
        // this.ws = null
        if (process.env.START_HOT) return

        if (this.count < 0) {
          clearTimeout(this.timeout)
          this.ws.close()
          Modal.confirm({
            // icon: null,
            content: 'WS-网络链接异常，请与工作人员联系!',
            okText: '退出程序',
            cancelText: '重新链接',
            onOk: () => {
              event.trigger('hideLoading')
              this.ws.close()

              closeApp()
            },
            onCancel: () => {
              event.trigger('hideLoading')
              this.connect(store, urlConfig)
              this.count = COUNT
            }
          })
        } else {
          event.trigger('showLoading')
          this.timeout = setTimeout(() => {
            this.connect(store, urlConfig)
            this.count--
          }, 2 * 1000)
        }
      }
      this.ws.onerror = (e: any) => {
        console.error('WebSocket通讯发生错误:', e)
      }
      this.ws.onmessage = (e: any) => {
        // console.log('getMessage收到消息:', data)
        const data = this.websocketDataToObject(e.data)
        store.dispatch(setMessage(data))
      }
    } catch (e) {
      console.error(e)
    }
  }

  close() {
    this.ws.send('close')
    this.ws.close()
    console.log('close')
  }

  // websocket 数据转化成 Object
  websocketDataToObject = (str: string): any => {
    try {
      const arr = str.split(':')
      const data = {
        key: arr[0].trim(),
        value: arr[1].trim(),
        date: new Date().valueOf()
      }

      if (data.key === 'scan') { // 条形码
        Media(scan_success)
      }

      return data
    } catch (e) {
      console.error(e)
    }
  }
}
