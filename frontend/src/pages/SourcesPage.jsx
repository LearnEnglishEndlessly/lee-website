import data from "../../../backend/data.json";
import { BackButton } from "../components/Icons";
import Search from "../assets/icons/search.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const SourcesPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    aspect: "",
    level: "",
    topic: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredData(data);
  }, []);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const resetFilters = () => {
    setFilters({
      aspect: "",
      level: "",
      topic: "",
    });
    setSearchTerm("");
    setFilteredData(data);
  };

  useEffect(() => {
    let filteredResult = data.filter((item) => {
      return (
        (filters.aspect === "" || item.aspect === filters.aspect) &&
        (filters.level === "" || item.level === filters.level) &&
        (filters.topic === "" || item.topic === filters.topic) &&
        (searchTerm === "" ||
          item.site.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });
    setFilteredData(filteredResult);
  }, [filters, searchTerm]);

  return (
    <div className="container w-page_center mx-auto" id="sources">
      <Link
        to="/"
        className="flex items-center text-2xl gap-x-4 text-[#898989] my-8 w-fit"
      >
        <BackButton /> Back
      </Link>
      <form className="col-span-12 flex">
        <input
          type="text"
          className="w-full border pl-12 text-basefont font-extralight bg-white rounded-l-md outline-none shadow-lg"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          type="submit"
          className="bg-redlee py-4 px-7 rounded-r-md shadow-lg"
        >
          <img
            src={Search}
            alt="search.svg"
            className="w-8 m-auto bg-transparent"
          />
        </button>
      </form>

      <div className="flex items-end gap-10 pt-6 pb-8">
        <div className="w-[31%]">
          <label className="text-2xl font-semibold">Aspect</label>
          <select
            className="bg-white py-3 w-full mt-4 cursor-pointer shadow-md outline-none"
            id=""
            name="aspect"
            value={filters.aspect}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="listening">Listening</option>
            <option value="speaking">Speaking</option>
            <option value="reading">Reading</option>
            <option value="writing">Writing</option>
          </select>
        </div>
        <div className="w-[31%]">
          <label className="text-2xl font-semibold">Level</label>
          <select
            className="bg-white py-3 w-full mt-4 cursor-pointer shadow-md outline-none"
            id=""
            name="level"
            value={filters.level}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="A1">{`(A1) Beginners`}</option>
            <option value="A2">{`(A2) Pre-Intermediate`}</option>
            <option value="B1">{`(B1) Intermediate`}</option>
            <option value="B2">{`(B2) Upper-Intermediate`}</option>
            <option value="C1">{`(C1) Advanced`}</option>
            <option value="C2">{`(C2) Proficiency`}</option>
          </select>
        </div>
        <div className="w-[31%]">
          <label className="text-2xl font-semibold">Topic</label>
          <select
            className="bg-white py-3 w-full mt-4 cursor-pointer shadow-md outline-none"
            id=""
            name="topic"
            value={filters.topic}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="sports">Sports</option>
          </select>
        </div>
        <div className="w-[7%] mb-2">
          <span
            className="text-2xl text-[#ABAFB5] cursor-pointer"
            onClick={resetFilters}
          >
            Clear
          </span>
        </div>
      </div>

      <div className="relative overflow-x-auto max-h-[50vh]">
        <table className="w-full text-left rtl:text-right text-basefont">
          <thead className="text-[#A9AFAD] sticky top-0">
            <tr>
              <th scope="col" className="px-6 py-1 font-medium">
                Site
              </th>
              <th scope="col" className="px-6 py-1 font-medium">
                Aspect
              </th>
              <th scope="col" className="px-6 py-1 font-medium">
                Level
              </th>
              <th scope="col" className="px-6 py-1 font-medium">
                Topic
              </th>
              <th scope="col" className="px-6 py-1 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr className="border-t border-[#9D9D9D]" key={item.id}>
                <td scope="row" className="px-6 py-4 whitespace-nowrap">
                  {item.site}
                </td>
                <td className="px-6 py-4">{item.aspect}</td>
                <td className="px-6 py-4">{item.level}</td>
                <td className="px-6 py-4">{item.topic}</td>
                <td className="py-4">
                  <Link
                    to={item.link}
                    className="bg-redlee px-5 py-1 text-white"
                  >
                    Learn
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SourcesPage;
