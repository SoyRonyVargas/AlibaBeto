// import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import { useState, type FC } from "react";
import ProductoSliderItem from "./ProductoSliderItem";
import type { Producto } from "../../types/Productos";

type Props = {
    productos: Producto[]
}

const ProductosSlider: FC<Props> = ({ productos = [] }) => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    // };
    const [panels, setPanels] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

    return (
        <>
            <h2 className="text-5xl font-bold mb-10">Celulares</h2>
            <div className="grid grid-cols-4 gap-4">
                {/* <Flicking renderOnlyVisible={true} align={false} circular={true}> */}
                {productos.map((_, index) =>
                    <div style={{ border: "1px solid #fff" }} className="flicking-panel border-black w-[100%] border-1 " key={index}>
                        <ProductoSliderItem
                            {..._}
                        />
                    </div>
                )}
                {/* </Flicking> */}
            </div>
        </>
    );
}

export default ProductosSlider