

export default function SideBar() {

    const domain = import.meta.env.VITE_WP_DOMAIN
    const restaurants = document.querySelector('.restaurants')
    const phrase = document.querySelector('.phrase')
    const container = document.querySelector('.container')
    const cross = document.querySelector('.cross')

    const showRestaurants = () => {
        cross?.classList.toggle('hidden')
        restaurants?.classList.toggle('hidden')
        phrase?.classList.toggle('hidden')
        container?.classList.toggle('gap-20')
    }


    return (
        <div className="flex ">
            <div className='overlay bg-white-50 w-full h-full absolute left-0 md:w-1/4  z-10 '>
                <div className="pt-10 md:pt-4 flex flex-col justify-start gap-20 md:gap-6 md:justify-start 2xl:gap-20 2xl:pt-20 h-full container">
                    <div className="space-y-6">
                        <div className="flex justify-evenly items-center">
                            <a href="/" className="block"><img className="h-12 2xl:h-16 mx-auto mb-10 md:mb-0" src={`${domain}/wp-content/uploads/2025/02/logo_mambrino.svg`} alt="" /></a>
                            <img onClick={showRestaurants} className="h-5 mb-10 invert brightness-0 md:hidden hidden cross" src={`${domain}/wp-content/uploads/2025/02/cross-2.svg`} alt="" />
                        </div>

                        <span className="font-acumin text-blue italic text-5xl leading-20 md:leading-normal text-center md:text-xl px-8 block 2xl:text-2xl phrase  mx-auto md:w-auto">“Operando restaurantes desde 1982”</span>
                    </div>
                    <div className="">
                        <button
                            onClick={showRestaurants}
                            className="font-acumin text-blue uppercase mx-auto block pb-4 2xl:text-xl underline md:decoration-none text-xl md:text-base md:hidden"
                        >Nuestros restaurantes</button>
                        <span
                            className="hidden md:block text-center font-acumin text-blue uppercase mx-auto 2xl:pb-8 pb-4 2xl:text-xl md:decoration-none text-xl md:text-base"
                        >Nuestros restaurantes</span>
                        <div className="hidden md:flex flex-col justify-center restaurants">
                            <a href="https://www.labodegadelatrattoria.com/"><img className="h-15 md:h-12 2xl:h-14 mx-auto mt-4" src={`${domain}/wp-content/uploads/2025/02/logo_la-bodega.svg`} alt="Restaurante La Bodega de la Trattoria" /></a>
                            <div className="border-b border-blue w-[90px] mx-auto mt-3 2xl:mt-5 md:mb-8 mb-12 2xl:mb-12"></div>
                            <a href="https://www.trattoriamambrino.com/"><img className="h-15 md:h-12 2xl:h-14 mx-auto" src={`${domain}/wp-content/uploads/2025/02/logo_trattoria-mambrino.svg`} alt="Restaurante Trattoria Mambrino" /></a>
                            <div className="border-b border-blue w-[90px] mx-auto mt-3 2xl:mt-5 md:mb-8 mb-12 2xl:mb-12"></div>
                            <a href="http://www.luciocaffe.com/"><img className="h-15 md:h-12 2xl:h-14 mx-auto" src={`${domain}/wp-content/uploads/2025/02/logo_lucio.svg`} alt="Restaurante Lucio" /></a>
                            <div className="border-b border-blue w-[90px] mx-auto mt-3 2xl:mt-5 md:mb-8 mb-12 2xl:mb-12"></div>
                            <a href="https://www.oliver.pe/"><img className="h-15 md:h-12 2xl:h-14 mx-auto" src={`${domain}/wp-content/uploads/2025/02/logo_oliver.svg`} alt="Restaurante Oliver" /></a>
                            <div className="border-b border-blue w-[90px] mx-auto mt-3 2xl:mt-5 md:mb-8 mb-12 2xl:mb-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
