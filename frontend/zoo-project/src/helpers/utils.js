import moment from 'moment'
import {axiosHttp} from "@/helpers/backend.js"

function formatDate(date) {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}

async function paginateAll(url) {
    let ret = []

    while (url !== null) {
        const response = await axiosHttp.get(url)
        const data = response.data
        ret.push(...data.results)
        url = data.next
    }

    return ret
}

export {formatDate, paginateAll}
