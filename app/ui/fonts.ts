import {Inter} from 'next/font/google'
import { Lusitana } from 'next/font/google'

export const inter = Inter({subsets: ['latin']})
export const lusitana = Lusitana({
    subsets: ['latin'], // Caratteri latini
    weight: '700', // Grassetto (se supportato)
  });