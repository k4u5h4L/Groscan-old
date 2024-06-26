import { AnimationType } from "@/types/animations";

const slideUp: AnimationType = {
    name: "Slide Up",
    variants: {
        initial: {
            opacity: 0,
            top: "100vh",
            scale: 0.4,
        },
        animate: {
            opacity: 1,
            top: "0vh",
            scale: 1,
        },
        exit: {
            opacity: 0,
            top: "100vh",
            scale: 0.4,
        },
    },
    transition: {
        duration: 0.7,
    },
};

const slideRight: AnimationType = {
    name: "Slide Right",
    variants: {
        initial: {
            opacity: 0,
            left: "-100%",
            scale: 0.6,
        },
        animate: {
            opacity: 1,
            left: 0,
            scale: 1,
        },
        exit: {
            opacity: 0,
            left: "100%",
            scale: 0.6,
        },
    },
    transition: {
        duration: 0.7,
    },
};

const slideLeft: AnimationType = {
    name: "Slide Left",
    variants: {
        initial: {
            opacity: 0,
            right: "-100%",
            scale: 0.6,
        },
        animate: {
            opacity: 1,
            left: 0,
            scale: 1,
        },
        exit: {
            opacity: 0,
            right: "100%",
            scale: 0.6,
        },
    },
    transition: {
        duration: 0.2,
    },
};

const fadeBack: AnimationType = {
    name: "Fade Back",
    variants: {
        initial: {
            opacity: 0,
            scale: 0.4,
        },
        animate: {
            opacity: 1,
            scale: 1,
        },
        exit: {
            opacity: 0,
            scale: 0.4,
        },
    },
    transition: {
        duration: 0.7,
    },
};

const rotateY: AnimationType = {
    name: "Rotate Y",
    variants: {
        initial: {
            rotateY: 90,
        },
        animate: {
            rotateY: 0,
        },
        exit: {
            rotateY: 90,
        },
    },
    transition: {
        duration: 0.7,
    },
};

const rotateX: AnimationType = {
    name: "Rotate X",
    variants: {
        initial: {
            rotateZ: 90,
            opacity: 0,
            scale: 0.6,
        },
        animate: {
            opacity: 1,
            rotateZ: 0,
            scale: 1,
        },
        exit: {
            opacity: 0,
            rotateZ: 90,
            scale: 0.6,
        },
    },
    transition: {
        duration: 0.7,
    },
};

const rotateZ: AnimationType = {
    name: "Rotate Z",
    variants: {
        initial: {
            opacity: 0,
            rotateZ: 360,
        },
        animate: {
            opacity: 1,
            rotateZ: 0,
        },
        exit: {
            opacity: 0,
            rotateZ: 360,
        },
    },
    transition: {
        duration: 0.7,
    },
};

export { slideUp, slideLeft, slideRight, fadeBack, rotateX, rotateY, rotateZ };
