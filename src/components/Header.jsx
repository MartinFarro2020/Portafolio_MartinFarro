const Header = () => {
    return (
      <main className="h-screen">
        <section className="">
          <div className="">
                    {/* <h1 className="flex flex-wrap tracking-[4px] text-[#f40f04] text-[18px] mt-[300px] sm:mt-[350px] sm:text-[30px]">
                      <span className="">F</span>
                      <span>U</span>
                      <span>L</span>
                      <span>L</span>
                      <span>-</span>
                      <span>S</span>
                      <span>T</span>
                      <span>A</span>
                      <span>C</span>
                      <span>K</span>
                      <span>-</span>
                      <span>D</span>
                      <span>E</span>
                      <span>V</span>
                      <span>E</span>
                      <span>L</span>
                      <span>O</span>
                      <span>P</span>
                      <span>E</span>
                      <span>R</span>
                    </h1> */}
                    
                    <div className="flex justify-center">
                          
                          <div className="flex gap-4 mt-[230px] sm:mt-[300px]">
                                <div className="flex text-white">
                                  <p>Martin Farro</p>
                                </div>
                                <a href="https://www.linkedin.com/in/martin-farro-07545229a" target="_blank">
                                  <img className="flex w-[55px] sm:w-[85px] square link_gold" src="/images/in-removebg-preview.png" alt=""/>
                                </a>
                                <a href="https://github.com/dashboard" target="_blank">
                                  <img className="flex w-[55px] sm:w-[85px] square rounded-full link_gold" src="/images/github2.png" alt="" />
                                </a>  
                          </div>
                    </div>
          </div>
        </section>

        

        
      </main>
    );
  };
  export default Header;