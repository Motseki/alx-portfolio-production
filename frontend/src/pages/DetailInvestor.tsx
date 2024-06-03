import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api-client";
import { AiFillStar } from "react-icons/ai";

const DetailInvestor = () => {
  const { investorId } = useParams();

  const { data: investor } = useQuery(
    "fetchInvestorById",
    () => apiClient.fetchInvestorById(investorId || ""),
    {
      enabled: !!investorId,
    }
  );

  if (!investor) {
    return <></>;
  }

  return (
    <div className="container flex-1 py-10 mx-auto space-y-6">
      <div>
        <span className="flex">
          {Array.from({ length: investor.starRating }).map(() => (
            <AiFillStar className="fill-yellow-400" />
          ))}
        </span>
        <h1 className="text-3xl font-bold">{investor.name}</h1>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {investor.imageUrls.map((image) => (
          <div className="h-[300px]">
            <img
              src={image}
              alt={investor.name}
              className="object-cover object-center w-full h-full rounded-md"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <div className="whitespace-pre-line">{investor.description}</div>
        <div className="h-fit">
        {investor.country}<br/>
        {investor.city}
        </div> 
      </div>
    </div>
  );
};

export default DetailInvestor;