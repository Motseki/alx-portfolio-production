import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import LatestInvestorCard from "../components/LatestInvestorCard";

const Investor = () => {
  const { data: investors } = useQuery("fetchQuery", () =>
    apiClient.fetchInvestors()
  );

  const topRowInvestors = investors?.slice(0, 2) || [];
  const bottomRowInvestors = investors?.slice(2) || [];

  return (
    <>
    <div className="container flex-1 py-10 mx-auto space-y-3">
      <h2 className="text-3xl font-bold">Select Current Investor</h2>
      <p>List of the Registered Investors on our Network</p>
      <div className="grid gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {topRowInvestors.map((investor) => (
            <LatestInvestorCard investor={investor} />
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {bottomRowInvestors.map((investor) => (
            <LatestInvestorCard investor={investor} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Investor;