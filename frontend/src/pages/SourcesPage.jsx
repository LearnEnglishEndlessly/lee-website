import data from "../../../backend/data.json";

const SourcesPage = () => {
  return (
    <>
      {data.map((get) => (
        <h1 key={get._id}>{get.site}</h1>
      ))}
    </>
  );
};

export default SourcesPage;
