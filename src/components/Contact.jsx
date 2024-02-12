import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_fw73ahp', 'template_13ofgy2', form.current, 'j4vHOEvgtkJWi_C5H')
        .then((result) => {
            alert("Mensaje enviado correctamente")
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <main className="h-screen" id="contact">
            <div className=''>
                <form ref={form} onSubmit={sendEmail} className='grid grid-col'>
                        <div className='flex flex-col gap-[40px] w-[full] justify-center items-center mt-[100px]'>
                            <div className='flex absolute overflow-hidden box w-[300px] sm:[390px] rounded-xl justify-center items-center'>
                                <div className='flex flex-col relative bg-[#05458b] dark:bg-[#3b3a39] w-[295px] sm:[385px] rounded-xl'>
                                    <p className='flex text-white font-fredoka-sans text-[20px] justify-center'>Contactame!!</p>
                                    <label className='text-white'>Name</label>
                                    <input type="text" name="user_name"  placeholder='Nombre'/>
                                    <label className='text-white'>Email</label>
                                    <input type="email" name="user_email" placeholder="correo@gmail.com"/>
                                    <label className='text-white'>Message</label>
                                    <textarea name="message" className='h-[100px] rounded-b-xl' placeholder='mensaje'/>   
                                </div>
                            </div>
                            <div className='flex gap-[40px] items-center justify-center mt-[350px]'>
                                <input type="submit" value="Enviar" className='flex bg-[#f4b106] text-[#000] font-fredoka-sans text-[20px] rounded-md w-[100px] gap-8 link_gold'/>
                                <div className='flex'>
                                    <a href="https://wa.me/+51955482740?text=Quiero%20realizar%20un%20proyecto%20web" target="_blank">
                                        <img className="ease-in rounded-full w-[60px] square link_whatsapp" src="/public/images/whatsappicono.png" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                </form>
            </div>
        </main>    
    );
};
export default Contact;

