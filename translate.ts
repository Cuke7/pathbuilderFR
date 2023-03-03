import { dictionary } from "./dictionary";


export const translate = (en: string) => {
    return dictionary.find(item => item.nameEN == en)?.nameFR
}