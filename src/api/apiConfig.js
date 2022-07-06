const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '9a02029e400368fa19df300979915db4',
  originalImage: (imagePath) =>
    `https://image.tmdb.org/t/p/original/${imagePath}`,
  w500Image: (imagePath) => `https://image.tmdb.org/t/p/w500/${imagePath}`,
};

export default apiConfig;
