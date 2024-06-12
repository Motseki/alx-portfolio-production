import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import LatestCompanyCard from "../components/LatestCompanyCard";

const Company = () => {
 
  const { data: companies } = useQuery("fetchQuery", () =>
    apiClient.fetchCompanies()
  );

  const topRowCompanies = companies?.slice(0, 2) || [];
  const bottomRowCompanies = companies?.slice(2) || [];

  return (
    <>
    <div className="container flex-1 py-10 mx-auto space-y-3">
      <h2 className="text-3xl font-bold">Select Current Company</h2>
      <p>List of the Registered Investors on our Network</p>
      <div className="grid gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {topRowCompanies.map((company) => (
            <LatestCompanyCard company={company} />
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {bottomRowCompanies.map((company) => (
            <LatestCompanyCard company={company} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Company;