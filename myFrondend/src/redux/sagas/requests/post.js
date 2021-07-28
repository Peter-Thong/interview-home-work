import axios from "axios";

export const requestGetPost = () => {
  return axios.request({
    method: "get",
    url: "http://localhost:5000/posts",
  });
};
