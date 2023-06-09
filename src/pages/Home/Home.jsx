import React from "react";
import { movies } from "../../constants";
// import { useNavigate } from "react-router-dom";
import ListItem from "../../components/ListItem/ListItem";

const Home = () => {
  return (
    <div className="w-11/12 md:w-7/12 lg:w-1/2 mx-auto">
      {movies.map((item, key) => (
        <ListItem item={item} key={key} />
      ))}
    </div>
  );
};

export default Home;
