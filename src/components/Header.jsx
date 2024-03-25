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
                    
                    <div className="flex flex-col">
                        
                          <div  className="flex flex-col justify-center items-center mt-[230px] sm:mt-[300px] gap-14">
                              <div className="flex flex-col justify-center items-center">
                                    <p className="flex text-[40px] text-[#94a3b8] dark:text-[#1e293b] font-fredoka-sans">MARTIN FARRO</p>
                                    <p className="flex text-[20px] sm:text-[30px] text-[#e9aa2b] dark:text-[#FFC300] font-fredoka-sans">Desarrollador Web Full Stack</p>
                              </div>

                              <div className="flex items-center gap-4 ">
                                    <a href="https://www.linkedin.com/in/martin-farro-07545229a" target="_blank">
                                      <img className="flex w-[55px] sm:w-[85px] square link_gold" src="/images/in-removebg-preview.png" alt=""/>
                                    </a>
                                    <a href="https://github.com/MartinFarro2020/Portafolio_MartinFarro/tree/main/src" target="_blank">
                                      <img className="flex w-[55px] sm:w-[85px] square rounded-full link_gold" src="/images/github2.png" alt="" />
                                    </a>  
                              </div>
                          </div>
                          
                    </div>
          </div>
        </section>

        

        
      </main>
    );
  };
  export default Header;