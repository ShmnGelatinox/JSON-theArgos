import Palais from "../assets/palais.jpg";
import Calendar from "./Calendar";

const Home = () => {
  return (
    <div>
      <h1 className="text-yellow-600 font-bold text-2xl text-center mb-8">
        Get your golden ticket for the Palace !
      </h1>
      <img
        src={Palais}
        alt="photo d'un palais grec"
        className="w-3/5 mx-auto"
      />
      <Calendar />
      <div className="pb-16 pt-6 flex justify-center">
        <form className="flex flex-col">
          <input
            className="rounded-full p-2 mb-4 italic"
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Enter your firstname"
          ></input>
          <input
            className="rounded-full p-2 mb-4 italic"
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Enter your lastname"
          ></input>
          <input
            className="rounded-full p-2 italic"
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Home;
