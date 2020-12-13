const initObj = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] == "object") {
      initObj(obj[key])
    } else {
      Object.defineProperty(obj, key, { writable: false, configurable: false })
    }
  }
}

const markUserAuthorize = (e) => {
  let authorParams = {
    appid: e.appid,
    key: e.key,
    md5key: e.md5key,
    userInfo: e.userinfo,
  }
  initObj(authorParams)
  // Object.preventExtensions(authorParams)
  window.uerAuthorizeInfo = authorParams
}

export default markUserAuthorize
