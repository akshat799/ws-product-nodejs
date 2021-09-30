import axios from 'axios'

//const port = process.env.REACT_APP_PORT || 5555 ;
//const baseUrl = `http://localhost:${port}` ; //When Node is on localhost

const baseUrl = `https://rift-candle-loan.glitch.me`

const API = axios.create({baseURL: `${baseUrl}`});

export const welcomeApi = () => API.get('/');

export const dailyStatApi = () => API.get('/stats/daily');

export const hourlyStatApi = () => API.get('/stats/hourly');

export const dailyEventApi = () => API.get('/events/daily');

export const hourlyEventApi = () => API.get('/events/hourly');

export const hourlyStatDataTableApi = () => API.get('/stats/hourly/interest');

export const hourlyEventDataTableApi = () => API.get('/events/hourly/interest');

export const poiAPI = () => API.get('/poi');
