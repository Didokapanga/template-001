import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import NavbarComponents from "@/components/Navbar/navbarComponent";
import TestimonialSection from "@/components/Testimonials/testimonials";
import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { GiBookmarklet, GiBookshelf } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineDevicesOther, MdOutlineStar, MdStyle, MdWorkspacesFilled } from "react-icons/md";
import { RiCalendarTodoFill, RiTeamFill } from "react-icons/ri";
import { TbDatabaseSearch } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <NavbarComponents />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="container overflow-hidden snap-none w-full mx-auto px-4 py-4 flex items-center justify-between lg:flex-row flex-col mt-10 md:mt-20 gap-11">
        <div className="lg:w-1/2 w-full flex flex-col justify-between">
          {/* <p className="text-[#344bdc] font-semibold">Consommons le génie congolais</p> */}
          <p>Procurez-vous un outil qui favorisera l&apos;exploitation de vos informations.</p>
          <h1 className="sm:text-6xl text-4xl font-bold mt-2 mb-8">Procurez-vous un outils qui favorisera l&apos;exploitation des vos information</h1>
          <span className="text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque natus
            corrupti tempora sint repudiandae praesentium voluptates sequi, quibusdam molestias non?</span>
          <a href="" className=" sm:w-1/2 w-full text-center text-[#ffffff] hover:text-[#c0adad] rounded-lg sm:p-3 p-2 mt-4 bg-[#344bdc]">
            Reservez-vous une séance de consulting
          </a>
        </div>
        <div className="lg:w-1/2 w-full">
          <Image
            src="/images/dashbord.jpg" // Assurez-vous que le chemin est correct
            alt="Description de l'image"
            width={1152} // Largeur de l'image en pixels
            height={864} // Hauteur de l'image en pixels
            className="w-full h-auto md:w-full lg:w-full object-cover rounded-lg" // Applique des classes supplémentaires si nécessaire
          />
        </div>
      </div>
      <div className="container overflow-hidden w-full mx-auto px-4 py-4 flex justify-between flex-col mt-7 md:mt-16 gap-5">
        {/* container overflow-hidden snap-none w-full mx-auto px-4 py-4 flex items-center justify-between lg:flex-row flex-col mt-10 md:mt-20 gap-11 */}
        <p>Qui sommes-nous ?</p>
        <div className="w-full flex justify-between lg:flex-row flex-col lg:gap-16 gap-6">
          <div className="lg:w-1/2 w-full">
            <h2 className="lg:text-4xl text-2xl">Des valeurs fortes nous gouvernent, nous guident et définissent nos choix</h2>
          </div>
          <div className="lg:w-1/2 w-full text-left">
            <p className="text-lg font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
              est praesentium magni in at odit, nisi nihil dignissimos labore id et distinctio cupiditate expedita exercitationem.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-around items-center lg:flex-row flex-col gap-4 mt-10">
          <div className=" w-full rounded-lg">
            <span className="flex flex-col gap-4 mb-6">
              <div className="w-10 p-2 bg-[#344bdc] text-center flex items-center justify-center rounded-lg text-[#ffffff] text-2xl"><RiTeamFill /></div>
              <h3>Une équipe de confiance</h3>
              <p className="text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ut sapiente quibusdam. Dolorem, dolores velit.</p>
            </span>
            <span className="flex flex-col gap-4 mb-6">
              <div className="w-10 p-2 bg-[#344bdc] text-center flex items-center justify-center rounded-lg text-[#ffffff] text-2xl"><RiCalendarTodoFill /></div>
              <h3>Année d&apos;expérience</h3>
              <p className="text-sm font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, hic inventore dolores suscipit natus ad.</p>
            </span>
          </div>
          <div className="w-full rounded-lg mx-10">
            <video
              src="/videos/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-lg">
            </video>
          </div>
          <div className=" w-full rounded-lg">
            <span className="flex flex-col gap-4 mb-6">
              <div className="w-10 p-2 bg-[#344bdc] text-center flex items-center justify-center rounded-lg text-[#ffffff] text-2xl"><AiFillLike /></div>
              <h3>Avis positifs</h3>
              <p className="text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sequi quam fugit numquam itaque atque.</p>
            </span>
            <span className="flex flex-col gap-4 mb-6">
              <div className="w-10 p-2 bg-[#344bdc] text-center flex items-center justify-center rounded-lg text-[#ffffff] text-2xl"><MdWorkspacesFilled /></div>
              <h3>Mode de travail flexible</h3>
              <p className="text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusantium vero nemo deserunt, blanditiis voluptatem.</p>
            </span>
          </div>
        </div>
        <div className="container w-full mx-auto flex justify-between flex-col mt-7 md:mt-16 gap-5">
          <p>Caractéristiques de services</p>
          <div className="w-full flex justify-between lg:flex-row flex-col lg:gap-16 gap-6">
            <div className="lg:w-1/2 w-full">
              <h2 className="lg:text-4xl text-2xl">Des solutions impressionnantes avec l&apos;aide de la technologie</h2>
            </div>
            <div className="lg:w-1/2 w-full text-left">
              <p className="text-lg font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                est praesentium magni in at odit, nisi nihil dignissimos labore id et distinctio cupiditate expedita exercitationem.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-around items-center lg:flex-row flex-col gap-4 mt-10">
            <div className="bg-[#5a14c3] w-full rounded-lg p-5 flex flex-col gap-4">
              <div className="w-10 p-2 bg-[#ece7ff] text-center flex items-center justify-center rounded-3xl text-[#333] text-2xl"><TbDatabaseSearch /></div>
              <h3 className="text-[#ece7ff]">Conception de sytème d&apos;information</h3>
              <p className="text-[#ece7ff]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ratione tempora, ullam assumenda atque minima.</p>
            </div>
            <div className="bg-[#ece7ff] w-full rounded-lg p-5 flex flex-col gap-4">
              <div className="w-10 p-2 bg-[#5a14c3] text-center flex items-center justify-center rounded-3xl text-[#ece7ff] text-2xl"><BiSupport /></div>
              <h3>Support informatique</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, quibusdam! Ipsam velit consequuntur fuga cumque!</p>
            </div>
            <div className="bg-[#ece7ff] w-full rounded-lg p-5 flex flex-col gap-4">
              <div className="w-10 p-2 bg-[#5a14c3] text-center flex items-center justify-center rounded-3xl text-[#ece7ff] text-2xl"><MdOutlineDevicesOther /></div>
              <h3>Développement logiciel</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque corrupti ab architecto error dolorum dolor.</p>
            </div>
            <div className="bg-[#ece7ff] w-full rounded-lg p-5 flex flex-col gap-4">
              <div className="w-10 p-2 bg-[#5a14c3] text-center flex items-center justify-center rounded-3xl text-[#ece7ff] text-2xl"><GrUserExpert /></div>
              <h3>Consultance et expertise</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eos non neque! Vitae, minima sapiente Accusantium eos.</p>
            </div>
          </div>
        </div>

        <div className="container w-full mx-auto flex justify-between flex-col mt-7 md:mt-16 gap-5">
          <p>Nos quelques projets fièrement réalisés!</p>
          <div className="w-full flex justify-between lg:flex-row flex-col lg:gap-16 gap-6">
            <div className="lg:w-1/2 w-full">
              <h2 className="lg:text-4xl text-2xl">Notre métier est de numériser de la gestion interne de votre entreprise</h2>
            </div>
            <div className="lg:w-1/2 w-full text-left">
              <p className="text-lg font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                est praesentium magni in at odit, nisi nihil dignissimos labore id et distinctio cupiditate expedita exercitationem.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-around items-center flex-col gap-4 mt-10">
            <div className="xl:w-3/4 w-full rounded-lg xl:p-10 p-4 justify-around flex xl:flex-row flex-col-reverse xl:gap-8 gap-4 mx-10 bg-slate-900 text-[#ffffff]">
              <div className="w-full text-left flex flex-col xl:gap-10 gap-6">
                <div className="flex gap-4">
                  <div className="xl:text-4xl text-3xl"><GiBookshelf /></div>
                  <h3 className="xl:text-4xl text-2xl">Lorem ipsum dolor sit amet.</h3>
                </div>
                <p className="text-lg font-light xl:block hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem, dolore reprehenderit voluptatibus
                  suscipit exercitationem quam cupiditate ducimus. Expedita fugit veritatis nobis eius autem quis?
                  Iure nulla cumque facilis expedita aliquid officiis illo, cum, aspernatur optio eius amet! Provident, dolor!
                </p>
                <div className="gap-4 text-yellow-300 text-4xl xl:flex hidden">
                  <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar />
                </div>
                <div className="xl:flex hidden gap-8 font-semibold">
                  <span>Logiciel</span>
                  <span>Enseignement</span>
                  <span>Correction exament d&apos;état</span>
                </div>
                <a href="" className="hover:text-zinc-600 w-1/2">Voir le projet</a>
              </div>
              <div className="w-full flex items-center justify-center text-center">
                <Image
                  src="/images/dashbord.jpg" // Assurez-vous que le chemin est correct
                  alt="Description de l'image"
                  width={1152} // Largeur de l'image en pixels
                  height={864} // Hauteur de l'image en pixels
                  className="w-full h-auto md:w-full lg:w-full object-cover rounded-lg" // Applique des classes supplémentaires si nécessaire
                />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-around items-center flex-col gap-4 mt-10">
            <div className="xl:w-3/4 w-full rounded-lg xl:p-10 p-4 justify-around flex xl:flex-row flex-col-reverse xl:gap-8 gap-4 mx-10 bg-red-950 text-[#ffffff]">
              <div className="w-full text-left flex flex-col xl:gap-10 gap-6">
                <div className="flex gap-4">
                  <div className="xl:text-4xl text-3xl"><MdStyle /></div>
                  <h3 className="xl:text-4xl text-2xl">Lorem ipsum dolor sit amet.</h3>
                </div>
                <p className="text-lg font-light xl:block hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem, dolore reprehenderit voluptatibus
                  suscipit exercitationem quam cupiditate ducimus. Expedita fugit veritatis nobis eius autem quis?
                  Iure nulla cumque facilis expedita aliquid officiis illo, cum, aspernatur optio eius amet! Provident, dolor!
                </p>
                <div className="gap-4 text-yellow-300 text-4xl xl:flex hidden">
                  <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar />
                </div>
                <div className="xl:flex hidden gap-8 font-semibold">
                  <span>Logiciel</span>
                  <span>Assurance</span>
                  <span>Vignette</span>
                </div>
                <a href="" className="hover:text-zinc-600 w-1/2">Voir le projet</a>
              </div>
              <div className="w-full flex items-center justify-center text-center">
                <Image
                  src="/images/dashbord.jpg" // Assurez-vous que le chemin est correct
                  alt="Description de l'image"
                  width={1152} // Largeur de l'image en pixels
                  height={864} // Hauteur de l'image en pixels
                  className="w-full h-auto md:w-full lg:w-full object-cover rounded-lg" // Applique des classes supplémentaires si nécessaire
                />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-around items-center flex-col gap-4 mt-10">
            <div className="xl:w-3/4 w-full rounded-lg xl:p-10 p-4 justify-around flex xl:flex-row flex-col-reverse xl:gap-8 gap-4 mx-10 bg-orange-800 text-[#ffffff]">
              <div className="w-full text-left flex flex-col xl:gap-10 gap-6">
                <div className="flex gap-4">
                  <div className="xl:text-4xl text-3xl"><GiBookmarklet /></div>
                  <h3 className="xl:text-4xl text-2xl">Lorem ipsum dolor sit amet.</h3>
                </div>
                <p className="text-lg font-light xl:block hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem, dolore reprehenderit voluptatibus
                  suscipit exercitationem quam cupiditate ducimus. Expedita fugit veritatis nobis eius autem quis?
                  Iure nulla cumque facilis expedita aliquid officiis illo, cum, aspernatur optio eius amet! Provident, dolor!
                </p>
                <div className="gap-4 text-yellow-300 text-4xl xl:flex hidden">
                  <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar />
                </div>
                <div className="xl:flex hidden gap-8 font-semibold">
                  <span>Logiciel</span>
                  <span>Justice</span>
                  <span>Gestion des litige</span>
                </div>
                <a href="" className="hover:text-zinc-600 w-1/2">Voir le projet</a>
              </div>
              <div className="w-full flex items-center justify-center text-center">
                <Image
                  src="/images/dashbord.jpg" // Assurez-vous que le chemin est correct
                  alt="Description de l'image"
                  width={1152} // Largeur de l'image en pixels
                  height={864} // Hauteur de l'image en pixels
                  className="w-full h-auto md:w-full lg:w-full object-cover rounded-lg" // Applique des classes supplémentaires si nécessaire
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full mx-auto flex justify-between flex-col mt-7 md:mt-16 gap-5 bg-[#344bdc]">
        <div className="container overflow-hidden w-full mx-auto px-4 py-4 flex justify-between flex-col mt-7 md:mt-16 gap-5 text-white">
          <p>Qui de mieux que nos clients pour parler de nous ?</p>
          <div className="w-full flex justify-between lg:flex-row flex-col lg:gap-16 gap-6">
            <div className="lg:w-1/2 w-full">
              <h2 className="lg:text-4xl text-2xl">Travailler avec des partenaires prestigieux et avant-gardistes est une véritable source de fierté pour nous.</h2>
            </div>
            <div className="lg:w-1/2 w-full text-left">
              <p className="text-lg font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                est praesentium magni in at odit, nisi nihil dignissimos labore id et distinctio cupiditate expedita exercitationem.
              </p>
            </div>
          </div>
        </div>
        <TestimonialSection />
        <div className="h-full w-full text-black bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] rounded-3xl">
          <div className="container overflow-hidden w-full mx-auto px-4 py-4 flex justify-between flex-col mt-7 md:mt-16 gap-5 mb-6">
            <p>Décrivez-nous votre projet ou posez votre question par ici</p>
            <div className="w-full flex justify-between lg:flex-row flex-col lg:gap-16 gap-6">
              <div className="lg:w-1/2 w-full">
                <h2 className="lg:text-4xl text-2xl">Venez rendre visite à notre équipe sympathique dans nos locaux.</h2>
              </div>
              <div className="lg:w-1/2 w-full text-left">
                <p className="text-lg font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                  est praesentium magni in at odit, nisi nihil dignissimos labore id et distinctio cupiditate expedita exercitationem.
                </p>
              </div>
            </div>
            <div className=" w-full flex items-center justify-center">
              <div className="lg:w-1/2 w-full justify-center items-center text-center mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
