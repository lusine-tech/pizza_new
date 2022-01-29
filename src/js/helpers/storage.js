export const setCookie = (name, value, expDate = 30) => {
    let date = new Date;
    let time = date.getTime() + expDate * 24 * 60 * 60 * 1000;
    document.cookie = `${name} = ${value}; expires = ${time.toString()}`
    
}
export const  getCookie=(name)=> {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  export const  deleteCookie=(name) => {
    setCookie(name, "", {
      'max-age': -1
    })
  }