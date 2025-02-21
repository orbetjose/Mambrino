import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from "swiper/modules"
import { CarouselHome } from '../types'
import { getPageInfo } from "../helpers/wp"
import SideBar from "../components/SideBar"

export default function Home() {


    const [images, setImages] = useState<CarouselHome[]>([])
    const [isLargeScreen, setIsLargeScreen] = useState(false)

    useEffect(() => {
        setIsLargeScreen(window.innerWidth > 768);

        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);




    useEffect(() => {
        getPageInfo('home')
            .then(data => setImages(data))
            .catch(error => console.error("Error fetching home:", error))
    }, [])

    return (
        <section>
            <div className="relative md:h-screen">
                <SideBar
                    
                />
                <Swiper
                    slidesPerView={1}
                    effect="fade"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    speed={1000}
                    navigation
                    modules={[EffectFade, Autoplay]}
                    loop={isLargeScreen}
                    className="w-full "
                >
                    {images[0]?.acf?.imagenes?.map((item, index) => (
                        <SwiperSlide key={index} className="">
                            <img loading="lazy" className="min-h-[700px] h-auto md:h-[100vh] 2xl:h-[95vh] md:min-h-auto w-full object-cover" src={isLargeScreen ? item.imagen.url : item.imagen_mobile.url} alt="" />
                        </SwiperSlide>

                    ))}
                </Swiper>
                <div className="hidden md:flex gap-8 text-white font-bentonbold absolute top-4 right-4 text-xs tracking-widest uppercase z-10">
                    <a href="">POLÍTICAS DE PRIVACIDAD</a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfzUWOG7n9asw0AyNhqRWZfs0ctLu1vGNGmlCWI57_rv2CqBQ/viewform">TRABAJA CON NOSOTROS</a>
                </div>
                <div className="relative w-full bg-dark-blue py-4 md:pr-4 z-10 px-4 md:px-0">
                    <p className="uppercase text-white text-xs font-benton text-center md:text-right tracking-widest px-4 md:px-0">DIRECCIÓN: AV. PARDO Y ALIAGA 652 PISO S1 SAN ISIDRO, LIMA - PERÚ | E-MAIL: INFO@RESTAURANTE.COM.PE TELÉFONO: (511) 412-0700</p>
                    <div className='flex justify-between text-white text-xs uppercase font-bentonbold pt-4 md:hidden'>
                        <span><a href="">POLÍTICAS DE PRIVACIDAD</a></span>
                        <span><a href="https://docs.google.com/forms/d/e/1FAIpQLSfzUWOG7n9asw0AyNhqRWZfs0ctLu1vGNGmlCWI57_rv2CqBQ/viewform">TRABAJA CON NOSOTROS</a></span>
                    </div>
                </div>
            </div>
        </section>
    )
}
