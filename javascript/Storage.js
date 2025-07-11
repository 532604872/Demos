export const Cookie = {
  // 是否有cookie
  has: (cname) => {
    if (!cname) return false
    const cookies = document.cookie.split(';').map(c => c.trim().split('=')[0])
    return cookies.includes(cname)
  },

  // 设置cookie
  set: (cname, value, expireDays = 0) => {
    if (!cname || value === undefined) return
    
    const expires = expireDays 
      ? `Expires=${new Date(Date.now() + expireDays * 24 * 60 * 60 * 1000).toUTCString()};`
      : ''
      
    document.cookie = `${cname}=${encodeURIComponent(value)};Path=/;${expires}`
  },

  // 获取cookie 
  get: (cname) => {
    if (!cname) return ''
    const value = document.cookie
      .split('; ')
      .find(row => row.startsWith(cname + '='))
      ?.split('=')[1]
    return value ? decodeURIComponent(value) : ''
  },

  // 删除cookie
  remove: (cname) => {
    if (!cname) return
    document.cookie = `${cname}=;Expires=Thu, 01 Jan 1970 00:00:01 GMT;Path=/;Max-Age=0;` // Domain=${domain};
  },

  // 清除所有cookie
  clear: () => {
    document.cookie.split(';')
      .map(c => c.trim().split('=')[0])
      .forEach(name => Cookie.remove(name))
  }
}

export const LocalStorage = {
  // 检查键是否存在
  has: (key) => {
    if (!key) return false
    return window.localStorage.getItem(key) !== null
  },

  // 设置存储项
  set: (key, value) => {
    if (!key) return
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error('LocalStorage 设置失败:', e)
    }
  },

  // 获取存储项
  get: (key) => {
    if (!key) return null
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch (e) {
      console.warn('LocalStorage 解析失败:', e)
      return window.localStorage.getItem(key)
    }
  },

  // 删除存储项
  remove: (key) => {
    if (!key) return
    window.localStorage.removeItem(key)
  },

  // 清空所有存储
  clear: () => {
    window.localStorage.clear()
  }
}

export const SessionStorage = {
  // 检查键是否存在
  has: (key) => {
    if (!key) return false
    return window.sessionStorage.getItem(key) !== null
  },

  // 设置存储项
  set: (key, value) => {
    if (!key) return
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error('SessionStorage 设置失败:', e)
    }
  },

  // 获取存储项 
  get: (key) => {
    if (!key) return null
    try {
      const item = window.sessionStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch (e) {
      console.warn('SessionStorage 解析失败:', e)
      return window.sessionStorage.getItem(key)
    }
  },

  // 删除存储项
  remove: (key) => {
    if (!key) return
    window.sessionStorage.removeItem(key)
  },

  // 清空所有存储
  clear: () => {
    window.sessionStorage.clear()
  }
}

/**
 * 清除所有
 */
export const clearAllStorage = () => {
  // 并行清除所有存储
  Promise.all([
    Promise.resolve(Cookie.clear()),
    Promise.resolve(LocalStorage.clear()),
    Promise.resolve(SessionStorage.clear())
  ]).catch(err => {
    console.error('清除存储失败:', err)
  })
}
