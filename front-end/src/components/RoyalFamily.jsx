import { useEffect, useState } from "react";

import { fetchRoyalFamily } from "../services/Api";

const RoyalFamily = () => {
  const [familyList, setFamilyList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRoyalFamily()
      .then((member) => setFamilyList(member))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-secondaryBlue h-screen">
      <h1 className="text-yellow-600 font-bold text-2xl text-center mb-8">
        Colchis's Royal Family
      </h1>
      <div className="flex justify-between items-start">
        {loading ? (
          <p>Chargement en cours ...</p>
        ) : (
          <>
            {familyList.map((members) => (
              <div className="">
                <img
                  src={members.picture}
                  alt={`photo d'une personne qui s'appelle ${members.firstname}`}
                  className="w-56"
                />
                <p className="text-center text-yellow-600 mb-2">
                  {members.firstname} {members.lastname}
                </p>
                <p className="text-center font-bold text-yellow-600 mb-2">
                  {members.title}
                </p>
                <p className="italic text-center">{members.description}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default RoyalFamily;
