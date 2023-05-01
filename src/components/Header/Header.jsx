import Search_Icon from "../../assets/images/icon-arrow.svg";

const API_KEY = "at_NFpL4iZDQjQq6Ptsj20w8IPWe01pR";

const Header = ({ getSearchInput }) => {
  return (
    <header className=" text-center flex flex-col items-center bg-cover bg-mobile px-2 py-10 sm:bg-desktop">
      <h2 className=" text-xl text-white font-semibold mb-3">
        Ip Address Tracker
      </h2>
      <div className="input__form flex  bg-white w-fit  rounded-lg overflow-hidden  mb-3  sm:w-[25%] hover:cursor-pointer">
        <input
          type="search"
          placeholder=" Search for an IP "
          className=" w-[90%] p-3 focus:outline-none text-black "
        />
        <button
          className=" bg-verydarkgray py-3 px-5 sm:w-fit transition-all delay-300 hover:cursor-pointer hover:opacity-[0.8] "
          onClick={getSearchInput}
        >
          <img src={Search_Icon} alt="Search Icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
