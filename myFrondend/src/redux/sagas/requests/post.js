import axios from "axios";

export const requestGetPost = () => {
  return axios.request({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts",
  });
};
