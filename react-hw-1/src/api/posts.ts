export const fetchPosts = (searchText: string, offset: number) => {
  return fetch(
    `https://studapi.teachmeskills.by/blog/posts/?limit=5&search=${searchText}&offset=${offset}`
  ).then((response) => {
    return response.json();
  });
};
