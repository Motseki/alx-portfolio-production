import Hero from "../components/Hero";

const HomePage = () => {

  return (
  
    <> 
    <Hero/>
    <div className="container flex-1 py-10 mx-auto space-y-3 ">
      <span className="flex">
        <span className="flex items-start justify-center">
        <div className="
            bg-no-repeat
            bg-contain
            bg-center
            bg-[url('./assets/idea.png')]
            h-48 w-96" />
        </span>
        <span>
          <h2 className="text-3xl font-bold">Entrepreneurs</h2>
          <p className="text-2xl justify-center items-center">Launchpad is always seeking creative startups with dedicated founders. 
            We aim to build close, long-term relationships with innovative tech and 
            science-driven startups. We support our capital investments with advice 
            & mentorship.</p>

            <p className="text-2xl items-center">If your unique African early-stage science or tech-driven 
            startup is looking for funding from a supportive network of experienced investors, submit an 
            application for consideration.</p>
            <button className="flex p-5 bg-cyan-600 text-2xl text-white font-bold w-full rounded">LEARN MORE ABOUT ABOUT APPLYING TO LAUNCHPAD </button>
          </span>
        </span>

        <span className="flex">
        <span>
        <h2 className="text-3xl pt-10 font-bold">Investors</h2>
        <p className="text-2xl justify-center items-center">Launchpad is a network of active angel investors building individual 
        portfolios by investing both financial & human capital in New African-based startups.</p>

          <p className="text-2xl items-center"> If you’re interested in actively engaging with the startup community, fostering great 
          relationships with fellow investors and sharing your knowledge with dedicated entrepreneurs, reach out about membership.</p>

          <button className="flex p-5 bg-cyan-600 font-bold text-2xl text-white w-full rounded">LEARN MORE ABOUT LAUNCHPAD MEMBERSHIP</button>
        </span>
        <span className="flex items-center justify-center">
        <div className="
            bg-no-repeat
            bg-contain
            bg-center
            bg-[url('./assets/investors.png')]
            h-48 w-96" />
        </span>
        </span>
    </div>
    </> 
  );
};

export default HomePage;