import prisma from "./client";

const seedCategory = async () => {
    const user = await prisma.user.findUnique({
        where: {
            email: "devkauhere@gmail.com",
        },
    });

    const gro = await prisma.grocery.findFirst({
        where: {
            barcode: "1234",
        },
    });

    const cat = await prisma.category.create({
        data: {
            name: "Books",
            icon: "/images/icons/category-blue/book.svg",
            desc: "Books to read",
            user: {
                connect: {
                    id: user.id,
                },
            },
            // groceries: {
            //     connect: { id: gro.id },
            // },
        },
    });

    console.log(cat);
};

const seedGrocery = async () => {
    const cat = await prisma.category.findFirst({
        where: {
            name: "Books",
        },
    });

    const user = await prisma.user.findUnique({
        where: {
            email: "devkauhere@gmail.com",
        },
    });

    const tomorrow = new Date();

    tomorrow.setDate(tomorrow.getDate() + 1);

    const item = await prisma.grocery.create({
        data: {
            name: "Pringles",
            desc: "Chips and crips",
            image: "https://www.bigbasket.com/media/uploads/p/l/1213138_3-pringles-potato-chips.jpg",
            barcode: "1234",
            expiry: tomorrow,
            user: {
                connect: {
                    id: user.id,
                },
            },
            categories: {
                connect: {
                    id: cat.id,
                },
            },
        },
    });

    console.log(item);
};

const clear = async () => {
    // const item = await prisma.category.deleteMany({
    //     where: {
    //         name: "Books",
    //     },
    // });

    const item = await prisma.grocery.deleteMany({
        where: {
            name: "Pringles",
        },
    });

    console.log(item);
};

// seedCategory();
// seedGrocery();
// clear();

export {};
