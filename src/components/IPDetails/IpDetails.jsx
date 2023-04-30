const IpDetails = () => {
  return (
    <article className=" bg-white flex flex-col gap-5 rounded-md shadow-lg w-[80%] p-10 font-semibold mx-auto absolute top-[9.5rem] left-10 md:flex-row md:left-40 md:justify-between">
      <div className="ip__item text-center flex flex-col md:items-start md:gap-2 px-4 border-r">
        <h4 className=" uppercase text-darkgray text-xs">ip address </h4>
        <h2 className="text-2xl font-semibold text-verydarkgray">
          192.168.226.176
        </h2>
      </div>
      <div className="ip__item text-center flex flex-col md:items-start md:gap-2 px-4 border-r">
        <h4 className=" uppercase text-darkgray text-xs "> location </h4>
        <h2 className="text-xl font-semibold text-verydarkgray">
          Accra, Ghana
        </h2>
      </div>
      <div className="ip__item text-center flex flex-col md:items-start md:gap-2 px-4 border-r">
        <h4 className=" uppercase text-darkgray text-xs "> time zone </h4>
        <h2 className="text-xl font-semibold text-verydarkgray">UC-05:00</h2>
      </div>
      <div className="ip__item text-center flex flex-col md:items-start md:gap-2">
        <h4 className=" uppercase text-darkgray text-xs "> isp </h4>
        <h2 className="text-xl font-semibold text-verydarkgray">
          spaceX starLink
        </h2>
      </div>
    </article>
  );
};

export default IpDetails;
