import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
  params: {
    _limit: 12,
  },
});

export const getPosts = async (_page = 1) => {
  const { data } = await instance.get("/", {
    params: {
      _page,
    },
  });

  return data;
};

export const getSinglePost = async (id) => {
  const { data } = await instance.get(`/${id}`);

  return data;
};

export const searchPosts = async (q, _page = 1) => {
  const { data } = await instance("/", {
    params: {
      q,
      _page,
    },
  });
  return data;
};

export const getPostComments = async (id) => {
  const { data } = await instance.get(`/${id}/comments`);

  return data;
};
