import axios from 'axios'

export default function ajax(url = '', params = {}, type = "GET") {
    let pormise;
    return new Promise((resolve, reject) => {
        if ('GET' === type) {
            let paramsStr = '';
            Object.keys(params).forEach(key => {
                paramsStr += key + '=' + params[key] + '&'
            })
            if (paramsStr !== '') {
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'))
            }
            url += '?' + paramsStr
            pormise = axios.get(url)
        } else if ('POST' === type) {
            pormise = axios.post(url, params)
        }

        pormise.then((response) => {
            resolve(response.data)
        }).catch(error => {
            reject(error)
        })
    })
}