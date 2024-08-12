import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
function App() {
  // Now,If we want that when we click On specific category we should receive news related to that category.
  //For that we will create variable category.
  let [category, setCategory] = useState("General");
  return (
    <div>
      <Navbar setCategory={setCategory} />
      {/* We will pass this category prop to NewdBoard */}
      <NewsBoard category={category} />
    </div>
  );
}
export default App;
