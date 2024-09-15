import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjU4NjU1MGIxNTcwZDYwODY5YzIxMjQxN2ZlNGQ1NyIsIm5iZiI6MTcyNTkxODM1Mi4xODgxNywic3ViIjoiNjZkZjZiNGU5YjVjN2E4ZjNkODc5ZmM4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.5veZWxwYqBaAwbwkHfaO8laI-xMtV2gtyZf0zSZT8q4",
  },
});

export default instance;
