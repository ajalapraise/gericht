
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import hoverImg from '../../../public/Images/gallery/Hover image.png'

interface SliderComponentProps {
    images: StaticImageData[];
}

const Slider: React.FC<SliderComponentProps> = ({ images }) => {
    const [hoveredStates, setHoveredStates] = useState(-1);

    const handleMouseEnter = (index: number): void => {
        setHoveredStates(index);
    };

    const handleMouseLeave = (index: number): void => {
        setHoveredStates(-1);
    };

    return (
        <div className='flex space-x-5'>
            {images.map((src, index) => (
                <div
                    key={index}
                    className={`relative w-[200px] h-[300px]`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                >
                    <Image src={src} alt='' layout="fill" objectFit="cover" />
                    <Image
                        src={hoverImg}
                        alt=''
                        layout="fill"
                        objectFit="cover"
                        className={`absolute ${hoveredStates === index ? '' : 'hidden'}`} />
                </div>
            ))}
        </div>
    );
};

export default Slider;
