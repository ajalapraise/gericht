import { Cormorant_Upright, Open_Sans, } from "next/font/google";

export const cormorantUpright = Cormorant_Upright({
    variable: '--cormorantUpright',
    subsets: ["latin"],
    display: "swap",
    weight: '300',
    adjustFontFallback: false

});

export const openSans = Open_Sans({
    variable: '--openSans',
    subsets: ["latin"],
    display: "auto",
    weight: '300',
    adjustFontFallback: false
});


