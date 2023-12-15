export interface navElement {
    title: string,
    link: string,
    offsetTop: number,
    mobileOffsetTop: number,
}

export interface ServiceBlock {
    svg: {
        width: number,
        height: number,
        viewBox: string,
        fill: string,
        xmlns: string,
        id: string,
        d: string,
        stroke: string,
        strokeWidth: number,
        strokeLinecap: string,
        strokeLinejoin: string,
    },
    alt: string,
    text: string,
    textClass: string,
}

export interface Slide {
    image: string,
    alt: string,
    title: string,
    subtitle: string,
    text: string,
}
