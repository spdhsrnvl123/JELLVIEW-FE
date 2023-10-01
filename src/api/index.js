import axios from 'axios';

const api = {
  jellies: "http://localhost:8001/jellies",
  review: "http://localhost:8001/review",
  delete: "http://localhost:8001/delete",
};

const fetchJellies = ()=>{
    return axios.get(api.jellies);
}

const fetchReview = ()=>{
    return axios.get(api.review);
}

const fetchMyReview = (email)=>{
    const url = `${api.review}/${email}`
    return axios.get(url);
}

export {
    fetchJellies,
    fetchReview,
    fetchMyReview
}