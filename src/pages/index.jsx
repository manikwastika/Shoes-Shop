import { Link } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import CustomNavbar from "../components/Fragments/Navbars";
import BnWBackgournd from "../components/Layouts/BlackAndWhite";

const slides = [
  {
    img: `${import.meta.env.BASE_URL}/img/shoes/S1_nobg.png`,
    label: "Slide 1",
  },
  {
    img: `${import.meta.env.BASE_URL}/img/shoes/S2_nobg.png`,
    label: "Slide 2",
  },
  {
    img: `${import.meta.env.BASE_URL}/img/shoes/S3_nobg.png`,
    label: "Slide 3",
  },
  {
    img: `${import.meta.env.BASE_URL}/img/shoes/S4_nobg.png`,
    label: "Slide 4",
  },
];

function IndexPage() {
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current]);
  return (
    <>
      <BnWBackgournd>
        <CustomNavbar
          bgStyle="bg-transparent"
          hoverBgRight="bg-slate-500"
          textColorRight="text-white"
          hoverTextRight="text-white"
          active="home"
          ColorRight="text-black bg-white"
          cartStyle="text-white"
        />
        <div className="w-full h-[calc(100vh-60px)] bg-transparent ">
          {/* //overflow-hidden */}
          <div className="grid grid-cols-2 w-full h-full">
            <div className="w-full h-full flex flex-col justify-center ps-[10%]">
              <h1 className="text-5xl font-bold font-CalSans">
                Choose Your Shoes
              </h1>
              <p className="max-w-[60%] mt-3 text-md font-Montserrat">
                Temukan koleksi sepatu berkualitas dengan desain modern untuk
                menemani setiap langkahmu. Nyaman dipakai, tampil percaya diri,
                dan cocok untuk berbagai aktivitas. Silahkan langsung saja login
                dan logout Sepuasnya walaupun menggunakan data ngawur tidak
                masalah!!. Or Contact this developer, for the new information :
              </p>
              <div className="flex h-10 items-center space-x-2 my-5">
                <div className="w-full h-full flex items-center">
                  <a
                    href="https://github.com/manikwastika"
                    className="flex hover:text-slate-500 transition-all duration-300"
                  >
                    <ion-icon
                      name="logo-github"
                      className="block text-xl"
                    ></ion-icon>
                    <span className="text-sm me-5 ps-1">@manikwastika</span>
                  </a>
                  <a
                    href="https://www.instagram.com/manikwst?igsh=dnQxZW12d2NxNXU4"
                    className="flex hover:text-slate-500 transition-all duration-300"
                  >
                    <ion-icon
                      name="logo-instagram"
                      className="text-xl"
                    ></ion-icon>
                    <span className="text-sm me-5 ps-1">@manikwst</span>
                  </a>
                  <a
                    href="https://manik.web.id/"
                    className="flex hover:text-slate-500 transition-all duration-300"
                  >
                    <ion-icon name="home" className="text-xl"></ion-icon>
                    <span className="text-sm me-5 ps-1">manik.web.id</span>
                  </a>
                </div>
              </div>
              <Link
                to={`/${import.meta.env.BASE_URL}/product`}
                className="max-w-35 text-center py-2 rounded-xl font-Manrope text-sm bg-black hover:bg-slate-500 transition-all duration-300 text-white"
              >
                Selengkapnya
              </Link>
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full overflow-hidden" ref={emblaRef}>
                <div className="flex w-full h-full">
                  {slides.map((slide, i) => (
                    <div
                      key={i}
                      className="flex-[0_0_100%] w-full h-full  flex items-center justify-center"
                      style={{ width: 900, height: 750, objectFit: "contain" }}
                    >
                      <img
                        src={slide.img}
                        alt={slide.label}
                        className="object-contain h-full w-full"
                        onError={(e) => {
                          // fallback jika gambar tidak ada
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </BnWBackgournd>
    </>
  );
}

export default IndexPage;
