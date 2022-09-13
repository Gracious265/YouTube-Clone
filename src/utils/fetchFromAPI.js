import axios from 'axios';


const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      relatedToVideoId: '7ghhRHRP6t4',
      part: 'id,snippet',
      type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '21afacf876mshea68371728e8d1cp1c8fc6jsndff778cb52e0',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  

export const fetchFromAPI = async (url) => {
   const {data} =  await axios.get(`${BASE_URL}/${url}`, options);
   return data;
}



