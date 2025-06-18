import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../styles/global.css'
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';


type Props = {
    imagenes: string[]
}

const CarouselImagenes = ({ imagenes }: Props) => {

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <div>
            <Swiper
                slidesPerView={1}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[FreeMode, Navigation, Thumbs]}
            >
                {
                    imagenes.map(imagen => (
                        <SwiperSlide>
                            <img
                                src={imagen}
                                className='rounded-lg w-full'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper mt-3"
            >
                {
                    imagenes.map(imagen => (
                        <SwiperSlide>
                            <img
                                src={imagen}
                                className='rounded-lg'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default CarouselImagenes