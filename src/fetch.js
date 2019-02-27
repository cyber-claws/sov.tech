const API_ROOT = "https://api.chucknorris.io/jokes";

const ChuckAPI = {
  categories: () =>
    fetch(`${API_ROOT}/categories`),
  randomFact: (category) =>
    fetch(`${API_ROOT}/random?category=${category}`),
};

export default {
  ChuckAPI,
};
