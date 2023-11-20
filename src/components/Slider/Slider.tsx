
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import hoverImg from '../../../public/Images/gallery/Hover image.png'

interface SliderComponentProps {
    images: StaticImageData[];
}

const Slider: React.FC<SliderComponentProps> = ({ images }) => {
    const [hoveredStates, setHoveredStates] = useState<number[]>(images.map(() => 0));

    const handleMouseEnter = (index: number): void => {
        const updatedStates = [...hoveredStates];
        updatedStates[index] = -1;
        setHoveredStates(updatedStates);
    };

    const handleMouseLeave = (index: number): void => {
        const updatedStates = [...hoveredStates];
        updatedStates[index] = 0;
        setHoveredStates(updatedStates);
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
                        className={`absolute ${hoveredStates[index] ? '' : 'hidden'}`} />
                </div>
            ))}
        </div>
    );
};

export default Slider;
