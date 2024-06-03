import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import LatestDestinationCard from "../components/LatestDestinationCard";
// import Hero from "../components/Hero";

const HomeOriginal = () => {
  const { data: hotels } = useQuery("fetchQuery", () =>
    apiClient.fetchHotels()
  );

  const topRowHotels = hotels?.slice(0, 2) || [];
  const bottomRowHotels = hotels?.slice(2) || [];

  return (
    <>
    {/* <Hero/> */}
    <div className="container flex-1 py-10 mx-auto space-y-3">
      {/* <h2 className="text-3xl font-bold">Latest Destinations</h2> */}
      <h2 className="text-3xl font-bold">Select Current Investment</h2>
      <p>List of the Registered Investors on our Network</p>
      <div className="grid gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {topRowHotels.map((hotel) => (
            <LatestDestinationCard hotel={hotel} />
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {bottomRowHotels.map((hotel) => (
            <LatestDestinationCard hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default HomeOriginal;