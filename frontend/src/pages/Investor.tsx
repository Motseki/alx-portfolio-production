import { useQuery } from "react-query";
import * as apiClient from "../api-client";
// import LatestDestinationCard from "../components/LatestDestinationCard";
import LatestInvestorCard from "../components/LatestInvestorCard";
// import Hero from "../components/Hero";

const Investor = () => {
  // const { data: hotels } = useQuery("fetchQuery", () =>
  //   apiClient.fetchHotels()
  // );

  const { data: investors } = useQuery("fetchQuery", () =>
    apiClient.fetchInvestors()
  );

  const topRowHotels = investors?.slice(0, 2) || [];
  const bottomRowHotels = investors?.slice(2) || [];

  return (
    <>
    {/* <Hero/> */}
    <div className="container flex-1 py-10 mx-auto space-y-3">
      <h2 className="text-3xl font-bold">Select Current Investor</h2>
      <p>List of the Registered Investors on our Network</p>
      <div className="grid gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {topRowHotels.map((investor) => (
            <LatestInvestorCard investor={investor} />
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {bottomRowHotels.map((investor) => (
            <LatestInvestorCard investor={investor} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Investor;