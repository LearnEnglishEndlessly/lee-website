import ListData from "../../../backend/data.json";
import { BackButton } from "../components/Icons";
import Search from "../assets/icons/search.svg";
import { Link } from "react-router-dom";

const SourcesPage = () => {
  return (
    <div className="container w-page_center mx-auto" id="sources">
      <Link
        to="/"
        className="flex items-center text-2xl gap-x-4 text-[#898989] my-8 w-fit"
      >
        <BackButton /> Back
      </Link>
      <div className="col-span-12 flex">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search..."
          className="w-full border pl-12 text-basefont font-extralight bg-white rounded-l-md outline-none shadow-lg"
        />
        <div className="bg-redlee py-4 px-7 rounded-r-md shadow-lg">
          <img
            src={Search}
            alt="search.svg"
            className="w-8 m-auto bg-transparent"
          />
        </div>
      </div>

      <div className="flex items-end gap-10 pt-6 pb-8">
        <div className="w-[31%]">
          <label className="text-2xl font-semibold">Aspect</label>
          <select
            name=""
            id=""
            className="bg-white py-3 w-full mt-4 cursor-pointer shadow-md outline-none"
          >
            <option value="">All</option>
            <option value="">Listening</option>
            <option value="">Speaking</option>
            <option value="">Reading</option>
            <option value="">Writing</option>
          </select>
        </div>
        <div className="w-[31%]">
          <label className="text-2xl font-semibold">Level</label>
          <select
            name=""
            id=""
            className="bg-white py-3 w-full mt-4 cursor-pointer shadow-md outline-none"
          >
            <option value="">All</option>
            <option value="">{`(A1) Beginners`}</option>
            <option value="">{`(A2) Pre-Intermediate`}</option>
            <option value="">{`(B1) Intermediate`}</option>
            <option value="">{`(B2) Upper-Intermediate`}</option>
            <option value="">{`(C1) Advanced`}</option>
            <option value="">{`(C2) Proficiency`}</option>
          </select>
        </div>
        <div className="w-[31%]">
          <label className="text-2xl font-semibold">Topic</label>
          <select
            name=""
            id=""
            className="bg-white py-3 w-full mt-4 cursor-pointer shadow-md outline-none"
          >
            <option value="">All</option>
            <option value="">Sports</option>
          </select>
        </div>
        <div className="w-[7%] mb-2">
          <span
            className="text-2xl text-[#ABAFB5] cursor-pointer"
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
            {ListData.map((data) => (
              <tr className="border-t border-[#9D9D9D]">
                <td scope="row" className="px-6 py-4 whitespace-nowrap">
                  {data.site}
                </td>
                <td className="px-6 py-4">{data.aspect}</td>
                <td className="px-6 py-4">{data.level}</td>
                <td className="px-6 py-4">{data.topic}</td>
                <td className="py-4">
                  <Link
                    to={data.link}
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
