import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api-client";
import { AiFillStar } from "react-icons/ai";
import GuestInfoForm from "../forms/GuestInfoForm/GuestInfoForm";

const DetailCompany = () => {
  const {companyId } = useParams();

  // const { data: hotel } = useQuery(
  //   "fetchHotelById",
  //   () => apiClient.fetchHotelById(companyId || ""),
  //   {
  //     enabled: !!companyId,
  //   }
  // );

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
        <span className="flex">
          {Array.from({ length: company.starRating }).map(() => (
            <AiFillStar className="fill-yellow-400" />
          ))}
        </span>
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

      <div className="grid grid-cols-1 gap-2 lg:grid-cols-4">
        {company.facilities.map((facility) => (
          <div className="p-3 border rounded-sm border-slate-300">
            {facility}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <div className="whitespace-pre-line">{company.description}</div>
        <div className="h-fit">
          <GuestInfoForm
            pricePerNight={company.pricePerNight}
            hotelId={company._id}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailCompany;