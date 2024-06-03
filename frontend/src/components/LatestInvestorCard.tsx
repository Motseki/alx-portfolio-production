import { Link } from "react-router-dom";
import { InvestorType } from "../../../backend/src/shared/types";

type Props = {
  investor: InvestorType;
};

const LatestInvestorCard = ({ investor }: Props) => {
  return (
    <Link
      to={`/investor-detail/${investor._id}`}
      className="relative overflow-hidden rounded-md cursor-pointer"
    >
      <div className="h-[300px]">
        <img
          src={investor.imageUrls[0]}
          className="object-cover object-center w-full h-full" alt=""
        />
      </div>

      <div className="absolute bottom-0 w-full p-4 bg-black bg-opacity-50 rounded-b-md">
        <span className="text-3xl font-bold tracking-tight text-white">
          {investor.name}
        </span>
      </div>
    </Link>
  );
};

export default LatestInvestorCard;