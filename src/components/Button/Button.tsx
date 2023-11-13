import React from 'react'
import { cormorantUpright } from '@/styles/font'


interface ButtonProps {
    btnValue: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ btnValue, className }) => {
    return (
        <input
            type="submit"
            value={btnValue}
            className={`bg-[#DCCA87] text-[#0C0B08] hover:bg-[#665a35] hover:text-[white] font-bold  text-[11px] tracking-widest py-2 px-4 rounded-sm ${cormorantUpright.className} ${className}`}
        />
    )
}

export default Button