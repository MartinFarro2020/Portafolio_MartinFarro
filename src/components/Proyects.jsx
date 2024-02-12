const Proyects = () => {
    return (
      <main className="h-screen" id="proyects">
            <form className="grid justify-center items-center gap-8">
                    <p className="flex text-[20px] sm:text-[40px] text-[#9BA4ED] mt-[50px] justify-center items-center">
                        Website
                    <span className="text-white">-Proyects</span>
                    </p>

                {/*Proyects  */}
                    <section className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                        
                        {/*pokedex*/}
                        <div className="flex flex-col w-[170px] sm:w-[250px] sm:h-[230px] sm:justify-center items-center border-solid border-[#9ca1a7] border-4 rounded-xl">
                                <img
                                    className="flex h-[100px] w-[160px] sm:w-[250px] sm:h-[190px] rounded-md"
                                    src="/images/Pokedex.png"
                                    alt=""
                                />
                                <div className="flex gap-1">
                                    <button className="w-[80px] h-[30px] sm:w-[120px] sm:h-[30px] border-[2px] rounded-md gap-2 border-white link"><a href="https://entregable05-martinfarro.netlify.app/" target="_blank">Tailwin</a></button>
                                    <button className="w-[80px] h-[30px] sm:w-[120px] sm:h-[30px] border-[2px] rounded-md gap-2 border-white link"><a href="https://github.com/MartinFarro2020/Entregable05" target="_blank">GitHub</a></button>
                                </div>
                        </div>
            
                        {/* Rick&Morty */}
                        <div className="flex flex-col w-[170px] sm:w-[250px] sm:h-[230px] items-center border-solid border-[#9ca1a7] border-4 rounded-xl">
                                <img
                                    className="flex h-[100px] w-[160px] sm:w-[250px] sm:h-[190px] rounded-md"
                                    src="/images/Rick&Morty.png"
                                    alt=""
                                />
                                <div className="flex gap-1">
                                    <button className="w-[80px] h-[30px] sm:w-[120px] sm:h-[30px] border-[2px] rounded-md gap-2 border-white link"><a href="https://entregable03-martinfarro.netlify.app/" target="_blank">Tailwin</a></button>
                                    <button className="w-[80px] h-[30px] sm:w-[120px] sm:h-[30px] border-[2px] rounded-md gap-2 border-white link"><a href="https://github.com/MartinFarro2020/Entregable03" target="_blank">GitHub</a></button>
                                </div>
                        </div>
            
                        {/* Usuarios */}
                        <div className="flex flex-col w-[170px] sm:w-[250px] sm:h-[230px] justify-center items-center border-solid border-[#9ca1a7] border-4 rounded-xl">
                                <img
                                    className="flex h-[100px] w-[160px] sm:w-[250px] sm:h-[190px] rounded-md"
                                    src="/images/Usuarios.png"
                                    alt=""
                                />
                                <div className="flex gap-1">
                                    <button className="w-[80px] h-[30px] sm:w-[120px] sm:h-[30px] border-[2px] rounded-md gap-2 border-white link"><a href="https://entregable04-martinfarro.netlify.app/" target="_blank">Tailwin</a></button>
                                    <button className="w-[80px] h-[30px] sm:w-[120px] sm:h-[30px] border-[2px] rounded-md gap-2 border-white link"><a href="https://github.com/MartinFarro2020/Entregable04" target="_blank">GitHub</a></button>
                                </div>
                        </div>
            
                        {/* Fortuna */}
                        <div className="flex flex-col w-[170px] sm:w-[250px] sm:h-[230px] justify-center items-center border-solid border-[#9ca1a7] border-4 rounded-xl">
                                <img
                                    className="flex h-[100px] w-[160px] sm:w-[250px] sm:h-[190px] rounded-md"
                                    src="/public/images/Fortuna.png"
                                    alt=""
                                />
                                <div className="flex gap-1">
                                    <button className="w-[80px] h-[30px] sm:w-[120px] sm:h-[30px] border-[2px] rounded-md border-white link"><a href="https://entregable01-martinfarro.netlify.app/" target="_blank">Tailwin</a></button>
                                    <button className="w-[80px] h-[30px] sm:w-[120px] sm:h-[30px] border-[2px] rounded-md border-white link"><a href="https://github.com/MartinFarro2020/Entregable01" target="_blank">Git Hub</a></button>
                                </div>
                        </div>
            
                        {/* Ecommers */}
                        <div className="flex flex-col w-[170px] sm:w-[250px] sm:h-[230px] justify-center items-center border-solid border-[#9ca1a7] border-4 rounded-xl">
                                <img
                                    className="flex h-[100px] w-[160px] sm:w-[250px] sm:h-[190px] rounded-md"
                                    src="/public/images/Ecommers.png"
                                    alt=""
                                />
                                <div className="flex gap-1">
                                    <button className="w-[80px] h-[30px] border-[2px] sm:w-[120px] sm:h-[30px] rounded-md gap-2 border-white link"><a href="https://pastor-martin-farro-martinez-g28.netlify.app/" target="_blank">Tailwin</a></button>
                                    <button className="w-[80px] h-[30px] border-[2px] sm:w-[120px] sm:h-[30px] rounded-md gap-2 border-white link"><a href="https://github.com/MartinFarro2020/Fundamentos_Ecommerce" target="_blank">GitHub</a></button>
                                </div>
                        </div>
            
                        {/* Clima */}
                        <div className="flex flex-col w-[170px] sm:w-[250px] sm:h-[230px] justify-center items-center border-solid border-[#9ca1a7] border-4 rounded-xl">
                                <img
                                    className="flex h-[100px] sm:w-[250px] sm:h-[190px] rounded-md"
                                    src="/public/images/Clima.png"
                                    alt=""
                                />
                                <div className="flex gap-1">
                                    <button className="w-[80px] h-[30px] sm:w-[120px] sm:h-[30px] border-[2px] rounded-md gap-2 border-white link"><a href="https://entregable02-martinfarro.netlify.app/" target="_blank">Tailwin</a></button>
                                    <button className="w-[80px] h-[30px] sm:w-[120px] sm:h-[30px] border-[2px] rounded-md gap-2 border-white link"><a href="https://github.com/MartinFarro2020/Entregable02" target="_blank">Git Hub</a></button>
                                </div>
                        </div>
                    </section>
            </form>
      </main>
      
    );
  };
  export default Proyects;
  