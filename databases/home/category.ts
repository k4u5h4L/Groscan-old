import { CategoryType } from "@/types/databases";

const categoryData: CategoryType[] = [
    {
        name: "Shirts",
        icon: "/images/icons/category-blue/shirt.svg",
        hyperlink: "/category", // keep a query, like ?c=shirts
    },
    {
        name: "Women",
        icon: "/images/icons/category-blue/shoe-lady.svg",
        hyperlink: "/category",
    },
    {
        name: "Kid's toys",
        icon: "/images/icons/category-blue/toy.svg",
        hyperlink: "/category",
    },
    {
        name: "Accesories",
        icon: "/images/icons/category-blue/watch.svg",
        hyperlink: "/category",
    },
    {
        name: "Education",
        icon: "/images/icons/category-blue/book.svg",
        hyperlink: "/category",
    },
    {
        name: "Flowers",
        icon: "/images/icons/category-blue/spa.svg",
        hyperlink: "/category",
    },
];

export { categoryData };
