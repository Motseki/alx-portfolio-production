import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api-client";

const DetailCompany = () => {
  const {companyId } = useParams();

  const { data: company } = useQuery(
    "fetchMyCompanyById",
    () => apiClient.fetchMyCompanyById(companyId || ""),
    {
      enabled: !!companyId,
    }
  );

  if (!company) {
    return <></>;
  }

  return (
    <div className="container flex-1 py-10 mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{company.name}</h1>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {company.imageUrls.map((image) => (
          <div className="h-[300px]">
            <img
              src={image}
              alt={company.name}
              className="object-cover object-center w-full h-full rounded-md"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <div className="whitespace-pre-line">{company.description}</div>
        <div className="h-fit">
            hotelId={company._id}
        </div>
      </div>
    </div>
  );
};

export default DetailCompany;