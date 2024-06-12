const AboutUs = () => {
  
      return (
        <>
        <div className="p-20 bg-contain 
          bg-center bg-[url('./assets/images-10.jpg')]  
          h-1/2 w-full
          bg-cyan-600">

              <div className="container items-center flex flex-col gap-2 my-auto mx-auto">
                <h1 className="text-7xl font-bold text-white">About Us</h1>
              </div>
       </div>

        <div className="container flex-1 py-10 mx-auto space-y-3">
        <span className="grid grid-cols-2">
          <h2 className="text-4xl font-bold w-auto">A description of what inspired this project</h2> 
          <p className="text-xl justify-center font-normal items-center w-auto">Many startup companies with great idea often fail to 
          pursue their dream due to lack of funding opportunities. Most of the time they lack information about where to get the Investors who 
          will be willing to investor in their businesses. On the other hand the investors also are in the look for trusted and legit 
          startup business idea to invest their into. Launchpad is closing the gap between the startup companies and Investors by building
          the platform where it will bring both Investors and startup together. The Launchpad will verify each each company and investor 
          registering in the platform to ensure transparency and Integrity.
         </p>
        </span>
        
        <hr/>
        <span className="grid grid-cols-2">
          <h2 className="text-4xl font-bold w-auto"> Team member’s Profile</h2> 
          <p className="text-xl font-normal justify-center items-center w-auto">
            <h1>Mr. Lebohang Bernard Motseki Profile Links Details</h1>
            <span className="flex flex-col gap-5 my-5">
              <a href="https://www.linkedin.com/in/lebohangmotseki/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">LinkedIn Profile Link</a>
              <a href="https://github.com/Motseki" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Github Profile Link</a>
              <a href="https://x.com/lbmotseki" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Twitter Profile Link</a>
            </span>
          </p>
        </span>

        <hr/>
        <span className="grid grid-cols-2">
          <h2 className="text-4xl font-bold w-auto">A link to the github repository for the project</h2> 
          <p className="text-xl font-normal justify-center items-center w-auto">     
           <h1>Project GitHub Link</h1>
           <a href="https://github.com/Motseki/alx-portfolio-production" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Project GitHub Codebase Link</a>
        </p>
        </span>

        <hr/>
    
           </div>
           </>
      );
    };
    
    export default AboutUs;