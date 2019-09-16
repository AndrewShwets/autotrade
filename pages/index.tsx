import React from "react";

import { sum } from "utils";

const Home = () => {
  const count = sum(1, 2);
  console.log(count);

  return <div>Home</div>;
};

export default Home;
