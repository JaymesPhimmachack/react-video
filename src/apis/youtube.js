import axios from 'axios';
const KEY = 'AIzaSyDx-j597LUhZQUk2UI_04NzlG2ScAd5Ps8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})
