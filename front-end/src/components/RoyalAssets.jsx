import { useEffect, useState } from "react";

import { fetchRoyalAssets } from "../services/Api";

const RoyalAssets = () => {
  const [assetsList, setAssetsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRoyalAssets()
      .then((asset) => setAssetsList(asset))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-secondaryBlue h-screen">
      <h1 className="text-yellow-600 font-bold text-2xl text-center mb-8">
        Colchis' Royal Assets
      </h1>
      <div className="w-4/5 mx-auto rounded-2xl border-2 overflow-hidden">
        {loading ? (
          <p>Chargement en cours ...</p>
        ) : (
          <table className="w-full mx-auto">
            <thead className="table-header-group border-b-2">
              <tr className="table-row">
                <th className="table-cell">Name</th>
                <th className="table-cell">Quantity</th>
                <th className="table-cell">Price</th>
                <th className="table-cell">Category</th>
              </tr>
            </thead>
            {assetsList.map((assets) => (
              <tbody className="table-row-group bg-white">
                <tr>
                  <td className="table-cell text-center">{assets.name}</td>
                  <td className="table-cell text-center">{assets.quantity}</td>
                  <td className="table-cell text-center">
                    {assets.price} lari
                  </td>
                  <td className="table-cell text-center">{assets.typeName}</td>
                </tr>
              </tbody>
            ))}
          </table>
        )}
      </div>
    </div>
  );
};

export default RoyalAssets;
