import Filter from "../components/filter";
import { useState } from "react";
import SpaceXCard from "../components/card";
import { v4 as uuidv4 } from 'uuid';
export default function Home(props) {
  const [result, setResult] = useState([]);

  const getResult = (filter) => {
    fetch(
      "https://api.spacexdata.com/v3/launches?limit=100&" +
        new URLSearchParams(filter).toString()
    )
      .then((res) => res.json())
      .then((res) => {
        setResult(res);
      });
  };

  return (
    <div>
      <h1>SpaceX Launch Programs</h1>
      <div className="row">
        <div id="filter" className="col-md-3 mb-3">
          <Filter onChange={getResult} />
        </div>
        <div id="launches" className="col-md-9">
          <div className="row">
            {result.length !== 0 ? (
              <>
                {" "}
                {result.map((r) => (
                  <div
                    className="col-xl-3 col-md-6 mb-3"
                    key={uuidv4()}
                  >
                    <SpaceXCard info={r} />
                  </div>
                ))}
              </>
            ) : (
              <div>No Result found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
