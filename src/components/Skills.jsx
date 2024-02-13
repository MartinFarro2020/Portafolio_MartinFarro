const Skills = () => {
    return (
      <main className="h-screen" id="skills">
        <div className="flex justify-center items-center sm:m-0-auto">
            <form className="grid font-fredoka-sans ">
              
              <p className="flex text-center text-white text-[25px] sm:text-[40px] mt-[50px] mx-auto">Habilidades Técnicas</p>
      
              <section className="grid grid-cols-3 sm:grid-cols-6 gap-1 sm:h-[300px] sm:w-[900px] rounded-xl">
                
                <div className="flex flex-col h-[80px] w-[100px] sm:h-[130px] sm:w-[130px] justify-center items-center mx-auto mt-4 border-solid border-[#9ca1a7] dark:border-[#dfe6e2] border-4 rounded-xl link_gold">
                    <a href="https://www.instagram.com/faromartines/saved/web-developer/18180633910303438/">
                        <img className="h-[40px]" src="/images/js.png" alt="nose" />
                    </a>
                    
                    <p className="text-[#d6ded9]">JavaScript</p>
                </div>
    
                <div className="flex flex-col h-[80px] w-[100px] sm:h-[130px] sm:w-[130px] justify-center items-center mx-auto mt-4 border-solid border-[#9ca1a7] dark:border-[#dfe6e2] border-4 rounded-xl link_gold">
                  <img className="h-[40px]" src="/images/html.png" alt="" />
                  <p className="text-[#d6ded9]">HTML</p>
                </div>
    
                <div className="flex flex-col h-[80px] w-[100px] sm:h-[130px] sm:w-[130px] justify-center items-center mx-auto mt-4 border-solid border-[#9ca1a7] dark:border-[#dfe6e2] border-4 rounded-xl link_gold">
                    <img className="h-[40px]" src="/images/css.png" alt="" />
                    <p className="text-[#d6ded9]">CSS</p>
                </div>
                    
                <div className="flex flex-col h-[80px] w-[100px] sm:h-[130px] sm:w-[130px] justify-center items-center mx-auto mt-4 border-solid border-[#9ca1a7] dark:border-[#dfe6e2] border-4 rounded-xl link_gold">
                    <img className="h-[40px]" src="/images/React-icon.png" alt="" />
                    <p className="text-[#d6ded9]">REACT</p>
                </div>
    
                <div className="flex flex-col h-[80px] w-[100px] sm:h-[130px] sm:w-[130px] justify-center items-center mx-auto mt-4 border-solid border-[#9ca1a7] dark:border-[#dfe6e2] dark:border-[#dfe6e2] border-4 rounded-xl link_gold">
                    <img className="h-[40px]" src="/images/tailwind.png" alt="" />
                    <p className="text-[#d6ded9]">Tailwin</p>
                </div>
    
                <div className="flex flex-col h-[80px] w-[100px] sm:h-[130px] sm:w-[130px] justify-center items-center mx-auto mt-4 border-solid border-[#9ca1a7] dark:border-[#dfe6e2] border-4 rounded-xl link_gold">
                    <img className="h-[40px]" src="/images/git.png" alt="" />
                    <p className="text-[#d6ded9]">Git</p>
                </div>
                
                <div className="flex flex-col h-[80px] w-[100px] sm:h-[130px] sm:w-[130px] justify-center items-center mx-auto mt-4 border-solid border-[#9ca1a7] dark:border-[#dfe6e2] border-4 rounded-xl link_gold">
                    <img className="h-[40px]" src="/images/github.png" alt="" />
                    <p className="text-[#d6ded9]">GitHub</p>
                </div>
    
                <div className="flex flex-col h-[80px] w-[100px] sm:h-[130px] sm:w-[130px] justify-center items-center mx-auto mt-4 border-solid border-[#9ca1a7] dark:border-[#dfe6e2] border-4 rounded-xl link_gold">
                    <img className="h-[40px]" src="/images/Vitejs-logo.png" alt="" />
                    <p className="text-[#d6ded9]">VITE</p>
                </div>
    
                <div className="flex flex-col h-[80px] w-[100px] sm:h-[130px] sm:w-[130px] justify-center items-center mx-auto mt-4 border-solid border-[#9ca1a7] dark:border-[#dfe6e2] border-4 rounded-xl link_gold">
                    <img className="h-[40px]" src="/images/node-js.png" alt="" />
                    <p className="text-[#d6ded9]">NODE</p>
                </div>
    
                <div className="flex flex-col h-[80px] w-[100px] sm:h-[130px] sm:w-[130px] justify-center items-center mx-auto mt-4 border-solid border-[#9ca1a7] dark:border-[#dfe6e2] border-4 rounded-xl link_gold">
                    <img className="h-[40px]" src="/images/docker.png" alt="" />
                    <p className="text-[#d6ded9]">DOCKER</p>
                </div>
    
                <div className="flex flex-col h-[80px] w-[100px] sm:h-[130px] sm:w-[130px] justify-center items-center mx-auto mt-4 border-solid border-[#9ca1a7] dark:border-[#dfe6e2] border-4 rounded-xl link_gold">
                    <img className="h-[40px]" src="/public/images/postman-removebg-preview.png" alt="" />
                    <p className="text-[#d6ded9]">POSTMAN</p>
                </div>
    
                <div className="flex flex-col h-[80px] w-[100px] sm:h-[130px] sm:w-[130px] justify-center items-center mx-auto mt-4 border-solid border-[#9ca1a7] dark:border-[#dfe6e2] border-4 rounded-xl link_gold">
                    <img className="h-[40px]" src=" /public/images/tableplus.png" alt="" />
                    <p className="text-[#d6ded9]">  TABLEPLUS</p>
                </div>
              </section>
              
            </form>
        </div>
      </main>
    );
  };
  export default Skills;