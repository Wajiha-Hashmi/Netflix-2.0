import axios from "axios";
import { getUpComingMovie } from "../redux/movieSlice";
import { Upcoming_Movie, options } from "../utils/constant";
import { useDispatch } from "react-redux";

const useUpComingMovies = async () => {
  const dispatch = useDispatch();

  try {
    const res = await axios.get(Upcoming_Movie, options);
    console.log(res.data.results);
    dispatch(getUpComingMovie(res.data.results));
  } catch (error) {
    console.log(error);
  }
};

export default useUpComingMovies;
