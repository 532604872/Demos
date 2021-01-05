/**
 * 来源：https://github.com/jaywcjlove/websocket
 * MDN文档参考：https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
 */
let _handlers = {},
  wsocket,
  eventTarget = document.createElement('div'),
  settings = {
    // 是否自动重连
    automaticOpen: true,
    // 自动重连延迟重连速度速度
    reconnectDecay: 1.5
  },
  func = function() {},
  // 对外泄露 API 😄
  _api = {
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN,
    CLOSING: WebSocket.CLOSING,
    CLOSED: WebSocket.CLOSED
  }

/**
   * [ws]
   * @param  参数 url 为建立连接的URL
   * @param  参数 protocols 为服务器选择的子协定
   * @param  参数 options 初始化定义参数
   */
function ws(url, protocols, options) {
  let self = this
  // websocket url
  this.url = url
  // websocket 状态
  this.readyState = WebSocket.CONNECTING

  /**
     * http://tools.ietf.org/html/rfc6455
     * 服务器选择的子协定，这是建立 WebSocket 对象时 protocols 参数里的其中一个字符串。
     */
  this.protocol = protocols ? protocols : null

  // 绑定选项定义设置
  if (!options) {
    options = {}
  }
  for (let key in settings) {
    if (typeof options[key] !== 'undefined') this[key] = options[key]
    else this[key] = settings[key]
  }

  // 公开 API
  for (let a in _api) this[a] = _api[a]

  // 用事件处理程序
  eventTarget.addEventListener('open', (event) => {
    self !== window && self.onopen(event)
  })
  eventTarget.addEventListener('close', (event) => {
    self !== window && self.onclose(event)
  })
  eventTarget.addEventListener('connecting', (event) => {
    self !== window && self.onconnecting(event)
  })
  eventTarget.addEventListener('message', (event) => {
    self !== window && self.onmessage(event)
  })
  eventTarget.addEventListener('error', (event) => {
    self !== window && self.onerror(event)
  })

  // 公开事件目标的API
  this.addEventListener = eventTarget.addEventListener.bind(eventTarget)
  this.removeEventListener = eventTarget.removeEventListener.bind(eventTarget)
  this.dispatchEvent = eventTarget.dispatchEvent.bind(eventTarget)

  if (this.automaticOpen === true && this !== window) this.open()
  return this
}

/**
   * [generateEvent 该函数产生一个事件，与标准兼容，兼容的浏览器和IE9 - IE11？]
   * http://stackoverflow.com/questions/19345392/why-arent-my-parameters-getting-passed-through-to-a-dispatched-event/19345563#19345563
   * https://msdn.microsoft.com/library/ff975299(v=vs.85).aspx
   * @param eventName 位字符串类型的事件名字
   * @param 参数的args对象的可选对象，该事件将使用
   */
function generateEvent(eventName, args) {
  let evt = document.createEvent('CustomEvent')
  evt.initCustomEvent(eventName, false, false, args)
  return evt
}

ws.prototype.onconnecting = func
ws.prototype.onerror = func
ws.prototype.onopen = func
ws.prototype.onmessage = func
ws.prototype.onclose = func

/**
   * [send 发送 websocket 消息]
   * @param 参数 data 为发消息的内容
   */
ws.prototype.send = function(data) {
  if (this.wsocket) this.wsocket.send(data)
  else {
    throw 'INVALID_STATE_ERR : Pausing to reconnect websocket'
  }
}

/**
   * [close 关闭 websocket 连接。]
   * 如果已经关闭了连接，此方法不起作用。
   *
   * 错误代码参考：https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
   * @param 参数 code 为错误代码 1000为正常关闭
   * @param 参数 reason 为错误理由
   */
ws.prototype.close = function(code, reason) {
  // 默认CLOSE_NORMAL代码
  if (typeof code === 'undefined') code = 1000
  if (this.wsocket) this.wsocket.close(code, reason)
}

/**
   * [open 打开建立 websocket 握手连接]
   */
ws.prototype.open = function() {
  if (!('WebSocket' in window)) return

  let self = this
  wsocket = new WebSocket(this.url, this.protocol || [])
  eventTarget.dispatchEvent(generateEvent('connecting'))
  wsocket.onopen = function(event) {
    self.protocol = ws.protocol
    self.readyState = WebSocket.OPEN

    let e = generateEvent('open')
    eventTarget.dispatchEvent(e)
  }
  wsocket.onclose = function(event) {
    self.readyState = WebSocket.CLOSED
    let e = generateEvent('connecting')
    e.code = event.code
    e.reason = event.reason
    e.wasClean = event.wasClean
    eventTarget.dispatchEvent(e)

    eventTarget.dispatchEvent(generateEvent('close'))
  }
  wsocket.onmessage = function(event) {
    let e = generateEvent('message')
    e.data = event.data
    eventTarget.dispatchEvent(e)
  }
  wsocket.onerror = function(event) {
    let e = generateEvent('error')
    eventTarget.dispatchEvent(e)
  }
  this.wsocket = wsocket
  return this
}

export default ws
