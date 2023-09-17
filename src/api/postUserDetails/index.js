import axios from 'axios';

const url=process.env.REACT_APP_BASE_URL;
export const postUserDetails=async (filteredUser)=>{
        const data =await axios.post(url + '/users', filteredUser)
        return data.data;
}
export const getSettings=async ()=>{
        const data =await axios.get(`${url}/settings`)
        //console.log(data.data.settings[0]);
        return data.data.settings;
}