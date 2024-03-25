const AboutMe = () => {
    return (
      <main className="h-screen" id="aboutme">
        <section className="flex min-h-[100vh] items-center top-[50px]">
          <div className="flex w-[100%] h-[200px] sm:h-[400px] bg-cover bg-[url('/public/images/seguridad-informatica-scaledgg.jpeg')]">
            <div className="flex flex-col justify-center items-center gap-8">  
                <p className="flex justify-center w-[120px] sm:w-[500px] text-[30px] sm:text-[70px] text-[red] font-dongle-sans">
                  SOBRE MI
                </p>
                <p className="w-[120px] sm:w-[500px] text-white font-fredoka-sans text-[7px] sm:text-[20px] ml-[4px] sm:ml-[22px]">
                Bienvenido a mi Portafolio:
                ¡Hola! Soy Martín Farro, un apasionado desarrollador Full Stack
                con un enfoque meticuloso en la creación de soluciones tecnológicas innovadoras.
                {/* A lo largo de mi carrera, trabajó en una variedad de proyectos que abarcan desde 
                el desarrollo de aplicaciones web hasta la implementación de sistemas complejos. */}
                Permíteme compartir contigo un vistazo de lo que puedo ofrecer:
                </p>
                <a href="/public/images/CV_Martín Farro Martinez 2024.pdf" 
                   target="_blank" 
                   className="flex justify-center cursor-pointer bg-[#f4b106] w-[150px] h-[30px] rounded-md text-[#000]
                   font-fredoka-sans text-[20px]">
                   Descargar CV</a>
            </div>
          </div>
        </section>
      </main>
    );
  };
  export default AboutMe;
  