/**
 * @Description: WebSocket 封装
 * @Author: zero
 * @Date: 2020-12-02 11:29:22
 * @LastEditors: zero
 * @LastEditTime: 2020-12-02 11:29:22
*/

import Stomp from 'stompjs'
// import SockJS from 'sockjs-client'
import websocketHeartbeat from './websocketHeartbeat'
import websocketjs from './websocketjs'
import host from '@host'
import { message } from 'antd'

export class WS {
  socket: any
  client: any
  subscriptions = []

  connect(url: any, protocols: any, options: any = {}) {
    // 判断浏览器是否支持 webSocket
    if ('WebSocket' in window) {
      return new Promise((resolve, reject) => {
        this.socket = new websocketHeartbeat({ url, ...options })
        this.client = Stomp.over(this.socket)
        this.client.connect({}, resolve)

        this.socket.onclose = () => {
          this.socket = null
        }

        this.socket.onerror = reject
      })
    } else {
      message.error('浏览器不支持webSocket')
    }
  }

  /**
   * 只有单个长链接，不要求保活
   * @param urlConfig
   * @param protocols
   * @param options
   */
  websocketjs(urlConfig: any, protocols: any, options: any = {}) {
    try {
      const [hostKey, path, option = {} ] = urlConfig
      const $host = host[hostKey]
      if (!$host) throw new Error(`Not hostKey in host => ${hostKey}`)
      const {
        urlParams = [],
        replaceParams = null,
        searchParams
      } = options
      const url = this.getFinalUrl($host, path, urlParams, replaceParams, searchParams)

      return new websocketjs(url, protocols, option)
    } catch (e) {
      console.error(e)
      return false
    }
  }

  subscribe(route: string, callback:any) {
    const subscription = this.client.subscribe(route, callback)
    this.subscriptions.push(subscription)

    return subscription.id
  }

  unsubscribe(id: string) {
    const idx = this.subscriptions.findIndex((sub:any) => sub.id === id)
    if (idx) {
      this.subscriptions[idx].unsubscribe()
      this.subscriptions.splice(idx, 1)
    }
  }

  unsubscribeAll() {
    this.subscriptions.forEach((sub: any) => {
      sub.unsubscribe()
    })
    this.subscriptions = []
  }

  disconnect() {
    return new Promise((resolve) => {
      this.unsubscribeAll()
      if (this.client) {
        this.client.disconnect(() => {
          this.client = null
          if (this.socket) {
            this.socket.close()
          }
          resolve()
        })
      } else {
        resolve()
      }
    })
  }

  getFinalUrl = ($host: string, path: string, urlParams: any, replaceParams: any, searchParams: any) => {
    let url = urlParams.length >= 1 ? `${$host}${path}/${urlParams.join('/')}` : `${$host}${path}`

    if (replaceParams) {
      for (const key in replaceParams) {
        if (Object.prototype.hasOwnProperty.call(replaceParams, key)) {
          const reg = new RegExp(`\\$${key}`, 'g')

          url = url.replace(reg, replaceParams[key])
        }
      }
    }
    if (searchParams) {
      url += (() => {
        let str = []
        for (let key in searchParams) {
          if (Object.prototype.hasOwnProperty.call(searchParams, key) && searchParams[key] !== '') {
            str.push(`${key}=${searchParams[key]}`)
          }
        }
        return `?${str.join('&')}`
      })()
    }
    return url
  }
}

const def = new WS()

export default def
