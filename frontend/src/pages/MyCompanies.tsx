import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api-client";
import { BsBuilding, BsMap } from "react-icons/bs";

const MyCompanies = () => {
  const { data: companyData } = useQuery(
    "fetchMyCompanies",
    apiClient.fetchMyCompanies,
    {
      onError: () => {},
    }
  );

  if (!companyData) {
    return <span className="container flex-1 py-10 mx-auto">No Companies found</span>;
  }

  return (
    <div className="container flex-1 py-10 mx-auto space-y-5">
      <span className="flex justify-between">
        <h1 className="text-3xl font-bold">My Companies</h1>
        <Link
          to="/add-company"
          className="flex p-2 text-xl font-bold text-white bg-blue-600 hover:bg-blue-500"
        >
          Add Company
        </Link>
      </span>
      <div className="grid grid-cols-1 gap-8">
        {companyData.map((company) => (
          <div
            data-testid="hotel-card"
            className="flex flex-col justify-between gap-5 p-8 border rounded-lg border-slate-300"
          >
            <h2 className="text-2xl font-bold">{company.name}</h2>
            <div className="whitespace-pre-line">{company.description}</div>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex items-center p-3 border rounded-sm border-slate-300">
                <BsMap className="mr-1" />
                {company.city}, {company.country}
              </div>
              <div className="flex items-center p-3 border rounded-sm border-slate-300">
                <BsBuilding className="mr-1" />
                {company.type}
              </div>
            </div>
            <span className="flex justify-end">
              <Link
                to={`/edit-company/${company._id}`}
                className="flex p-2 text-xl font-bold text-white bg-blue-600 hover:bg-blue-500"
              >
                View Details
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCompanies;