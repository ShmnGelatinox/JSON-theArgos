import { useEffect, useState } from "react";

import { fetchJavelinResults } from "../services/Api";

const JavelinWorldCup = () => {
  const [resultsList, setResultsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJavelinResults()
      .then((result) => setResultsList(result))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="bg-secondaryBlue h-screen">
      <h1 className="text-yellow-600 font-bold text-2xl text-center mb-8">
        Javelin's World Cup Results
      </h1>
      <div className="w-4/5 mx-auto rounded-2xl border-2 overflow-hidden">
        {loading ? (
          <p>Chargement en cours ...</p>
        ) : (
          <table className="table-auto w-full mx-auto">
            <thead className="table-header-group border-b-2">
              <tr className="table-row">
                <th className="table-cell">Rank</th>
                <th className="table-cell">Distance</th>
                <th className="table-cell">Player</th>
                <th className="table-cell">Country</th>
              </tr>
            </thead>
            {resultsList.map((results) => (
              <tbody className="table-row-group bg-white">
                {results.disqualified === 0 ? (
                  <tr>
                    <td className="table-cell text-center pb-2">
                      {results.rank}
                    </td>
                    <td className="table-cell text-center pb-2">
                      {results.distance} m
                    </td>

                    <td className="items-center text-center flex justify-around pb-2">
                      <p>{results.player}</p>
                      <img
                        className="w-12 py-auto"
                        src={results.picture}
                        alt="image de lanceur de javelot"
                      />
                    </td>
                    <td className="table-cell text-center pb-2">
                      {results.country}
                    </td>
                  </tr>
                ) : (
                  <>
                    <tr>
                      <td className="table-cell text-center">
                        Disqualified for doping !
                      </td>
                      <td className="table-cell text-center">
                        {results.distance} m
                      </td>

                      <td className="text-center flex justify-around items-center">
                        {results.player}
                        <img
                          className="w-12 py-auto"
                          src={results.picture}
                          alt="image de lanceur de javelot"
                        />
                      </td>
                      <td className="table-cell text-center">
                        {results.country}
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            ))}
          </table>
        )}
      </div>
    </div>
  );
};

export default JavelinWorldCup;
