// import { useQuery } from "react-query";
// import * as apiClient from "../api-client";
// import LatestDestinationCard from "../components/LatestDestinationCard";

const HomePage = () => {
//   const { data: hotels } = useQuery("fetchQuery", () =>
//     apiClient.fetchHotels()
//   );

//   const topRowHotels = hotels?.slice(0, 2) || [];
//   const bottomRowHotels = hotels?.slice(2) || [];

  return (
    <div className="space-y-3">
      <h2 className="text-3xl font-bold">Entrepreneurs</h2>
      <p className="text-2xl justify-center items-center">Launchpad is always seeking creative startups with dedicated founders. 
        We aim to build close, long-term relationships with innovative tech and 
        science-driven startups. We support our capital investments with advice 
        & mentorship.</p>

        <p className="text-2xl items-center">If your unique New England-headquartered early-stage science or tech-driven 
        startup is looking for funding from a supportive network of experienced investors, submit an 
        application for consideration.</p>

      <h2 className="text-3xl pt-10 font-bold">Investors</h2>
      <p className="text-2xl justify-center items-center">Launchpad is a network of active angel investors building individual 
      portfolios by investing both financial & human capital in New England-based startups. Since 2001, Launchpad members have 
      invested over $125 million in more than 150 startups.</p>

        <p className="text-2xl items-center"> If you’re interested in actively engaging with the startup community, fostering great 
        relationships with fellow investors and sharing your knowledge with dedicated entrepreneurs, reach out about membership.</p>
    </div>
  );
};

export default HomePage;