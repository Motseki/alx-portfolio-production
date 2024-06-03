// import { useQuery } from "react-query";
// import * as apiClient from "../api-client";
// import LatestDestinationCard from "../components/LatestDestinationCard";

const AboutUs = () => {
    //   const { data: hotels } = useQuery("fetchQuery", () =>
    //     apiClient.fetchHotels()
    //   );
    
    //   const topRowHotels = hotels?.slice(0, 2) || [];
    //   const bottomRowHotels = hotels?.slice(2) || [];
    
      return (
        <>
        <div className="p-20 bg-repeat bg-cover 
          bg-center bg-[url('./assets/images-3.jpg')] 
          h-1/2 w-full
          bg-cyan-600">

              <div className="container items-center flex flex-col gap-2 my-auto mx-auto">
                <h1 className="text-7xl font-bold text-white">About Us</h1>
              </div>
       </div>

        <div className="container flex-1 py-10 mx-auto space-y-3">
        <span className="grid grid-cols-2">
          <h2 className="text-5xl font-bold w-auto">Your Partner in Business Growth</h2> 
          <p className="text-xl justify-center font-normal items-center w-auto">Launchpad is always seeking creative startups with dedicated founders. 
          At Startup Launch Pad, we are your dedicated partners on the path to entrepreneurial success in Ireland. Our mission is 
          clear: to empower businesses, both budding startups and established enterprises, by providing a comprehensive array of services 
          that cater to their unique needs. With a focus on business planning, grant applications, networking, AI tech guidance, market research 
          advice, and supplier connections, we’re committed to being the catalyst for your growth and prosperity.</p>
    
            {/* <p className="text-2xl items-center">If your unique African early-stage science or tech-driven 
            startup is looking for funding from a supportive network of experienced investors, submit an 
            application for consideration.</p> */}
        </span>
        
        <hr/>
        <span className="grid grid-cols-2">
          <h2 className="text-2xl font-bold w-auto">Mission Statement</h2> 
          <p className="text-xl font-normal justify-center items-center w-auto">
          At Startup Launch Pad, our mission is to be the driving force behind the growth and prosperity of businesses in Ireland. We are dedicated to 
          equipping entrepreneurs and enterprises with the knowledge, resources, and support needed to achieve their goals and make a lasting impact in 
          their industries. We strive to foster innovation, create connections, and empower businesses to thrive, not just in the Irish market but on the 
          global stage as well.</p>
        </span>

        <hr/>
        <span className="grid grid-cols-2">
          <h2 className="text-2xl font-bold w-auto">Our Core Values</h2> 
          <p className="text-xl font-normal justify-center items-center w-auto">     
            Integrity: We hold ourselves to the highest ethical standards, ensuring transparency, honesty, 
            and trust in all our interactions.<br/><br/>
            Innovation: We embrace change and encourage the continuous pursuit of knowledge and cutting-edge solutions to fuel business growth.

            Collaboration: We believe in the power of partnerships, fostering a collaborative ecosystem where businesses can connect, learn from one another, and grow together.
            <br/><br/>
            Empowerment: We are dedicated to empowering businesses and entrepreneurs, providing them with the tools and knowledge to take control of their destinies and achieve success.
            <br/><br/>
            Community: We value the sense of community and support that comes from like-minded individuals and organizations working together for mutual success.</p>
        </span>

        <hr/>
        <span className="grid grid-cols-2">
          <h2 className="text-2xl font-bold w-auto">Our Philosophy</h2> 
          <p className="text-xl font-normal justify-center items-center w-auto">     
          At Startup Launch Pad, we firmly believe that business success is attainable through a combination of informed decision-making, effective networking, and technological innovation. 
          Our philosophy revolves around the idea that every entrepreneur and business, regardless of size or experience, has the potential to thrive. We are committed to democratizing the 
          tools and resources required for success and making them accessible to all. By fostering a culture of collaboration, innovation, and empowerment, we aim to create a community of 
          businesses that not only achieve their goals but also contribute to the growth and vibrancy of the Irish business landscape. Together, we can turn dreams into realities, and 
          aspirations into achievements.
         </p> 
        </span>

        <hr/>
    
           </div>
           </>
      );
    };
    
    export default AboutUs;