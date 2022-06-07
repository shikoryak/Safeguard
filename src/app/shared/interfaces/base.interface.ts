export interface Benefit {
    count: string;
    currency: string;
    description: string;
}
export interface Experience {
    number: string;
    title: string;
    description: string;
}
export interface Work {
    title: string;
    description: string;
    link: string;
}
export interface Part {
    number: string;
    description: string;
    image: Image;
}
interface Image {
    src: string;
    alt: string;
}