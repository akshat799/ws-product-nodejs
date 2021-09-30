import axios from 'axios'

const port = process.env.REACT_APP_PORT || 5555 ;
const baseUrl = `http://localhost:${port}` ; //When Node is on localhost

<<<<<<< HEAD
//const baseUrl= `https://nostalgic-lichterman-33f0a4.netlify.app/`;
=======
const baseUrl= `https://backendeqworkinternship.vercel.app/`;
>>>>>>> 96eedf1fe8ba8d0e9de728995fd7ccfa17463a5c

const API = axios.create({baseURL: `${baseUrl}`});

export const welcomeApi = () => API.get('/');

export const dailyStatApi = () => API.get('/stats/daily');

export const hourlyStatApi = () => API.get('/stats/hourly');

export const dailyEventApi = () => API.get('/events/daily');

export const hourlyEventApi = () => API.get('/events/hourly');

export const hourlyStatDataTableApi = () => API.get('/stats/hourly/interest');

export const hourlyEventDataTableApi = () => API.get('/events/hourly/interest');

export const poiAPI = () => API.get('/poi');
