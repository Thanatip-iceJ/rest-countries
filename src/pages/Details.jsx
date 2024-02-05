import React from "react";
import { useCon } from "../contexts/Context";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Map from "../components/Map";
import { Suspense } from "react";

function Details() {
  const { countryName } = useParams();
  useEffect(() => {
    getByName(countryName);
  }, []);
  const { currentCountry, getByName, detailsPageLoading } = useCon();

  if (detailsPageLoading) return <Loading />;

  return (
    <>
      {currentCountry ? (
        <div>
          <div className="flex w-full">
            <div id="left" className="w-full flex items-center justify-center">
              <div>
                <img src={currentCountry[0].flags.png} alt="flag" />
              </div>
            </div>
            <div id="right" className="w-full">
              <div className="flex flex-col gap-5">
                <div className="flex items-center">
                  <p className="text-lg font-semibold w-[7rem]">Name: </p>{" "}
                  <p className="text-lg">{currentCountry[0].name.official}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-lg font-semibold w-[7rem]">Languages: </p>{" "}
                  <p className="text-lg">
                    {Object.values(currentCountry[0].languages).join(", ")}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-lg font-semibold w-[7rem]">Currency: </p>{" "}
                  <p className="text-lg">
                    {Object.keys(currentCountry[0].currencies).join(", ")}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-lg font-semibold w-[7rem]">Region: </p>{" "}
                  <p className="text-lg">{currentCountry[0].region}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-lg font-semibold w-[7rem]">Sub Region: </p>{" "}
                  <p className="text-lg">{currentCountry[0].subregion}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-lg font-semibold w-[7rem]">Timezone: </p>{" "}
                  <p className="text-lg">
                    {currentCountry[0].timezones.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-[6rem]">
            <Suspense fallback={<Loading />}>
              <Map position={currentCountry[0].latlng} />
            </Suspense>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Details;
