import { useEffect, useState } from "react";

const useCars = () => {
  const [cars, setcars] = useState([]);

  useEffect(() => {
    fetch("https://nameless-retreat-70223.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setcars(data));
  }, []);

  return {
    cars,
    setcars,
  };
};

export default useCars;
