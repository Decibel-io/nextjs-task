import axios from 'axios';
const BASEURL = "https://frontend-test-api.aircall.io"

export const request = async (url: string, method: string, body?: Object) => {
    let accessToken = localStorage.getItem('token');
    const res = await axios({
        method,
        url: BASEURL + url,
        headers: {
            "Authorization": `Bearer ${accessToken}`
        },
        data: body
    });
    return res;
};