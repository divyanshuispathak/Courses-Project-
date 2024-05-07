import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import NavBar from "./components/NavBar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner"

const App = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await fetch(apiUrl);
      const output = await result.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Something went Wrong")
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <NavBar />
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter category={category} setCategory={setCategory} filterData={filterData} />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner></Spinner>) : (<Cards courses={courses} category={category} />)
          }
        </div>
      </div>

    </div>
  );
};

export default App;
