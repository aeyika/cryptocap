import { Raleway } from "next/font/google";
import { Roboto } from "next/font/google";


export const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '700'],  // Add the weights you need
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],  // Add the weights you need
});