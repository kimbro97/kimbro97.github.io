import axios from "axios";

const url = "/api/console/blogs"

export const blog = {
    gets(data) {
        return axios.get(url, data).then(result => result.data)
    }
}