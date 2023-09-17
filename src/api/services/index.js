import axios from 'axios';

const url=process.env.REACT_APP_BASE_URL;

export const getServices=async ()=>{
    const data =await axios.get(`${url}/service`)
    //console.log(data.data.settings[0]);
    return data.data.services;
}