interface BannerType {
    name: string;
    imageSrc: string;
    buttonText: string;
    hyperlink: string;
}

interface CategoryType {
    icon: string;
    name: string;
    hyperlink: string;
}

export type { BannerType, CategoryType };
