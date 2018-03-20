const apiURL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'http://localhost:8000';

export { apiURL };