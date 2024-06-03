import { Link } from "react-router-dom";
// import { HotelType } from "../../../backend/src/shared/types";
import { CompanyType } from "../../../backend/src/shared/types";

type Props = {
  company: CompanyType;
};

const LatestCompanyCard = ({ company }: Props) => {
  return (
    <Link
      to={`/company-detail/${company._id}`}
      className="relative overflow-hidden rounded-md cursor-pointer"
    >
      <div className="h-[300px]">
        <img
          src={company.imageUrls[0]}
          className="object-cover object-center w-full h-full" alt=""
        />
      </div>

      <div className="absolute bottom-0 w-full p-4 bg-black bg-opacity-50 rounded-b-md">
        <span className="text-3xl font-bold tracking-tight text-white">
          {company.name}
        </span>
      </div>
    </Link>
  );
};

export default LatestCompanyCard;