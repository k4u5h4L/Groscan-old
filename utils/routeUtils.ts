import { NextRouter } from "next/router";

const logDifferentRoutesFromRouter = (router: NextRouter): void => {
    console.log("asPath", router.asPath);
    console.log("basePath", router.basePath);
    console.log("pathname", router.pathname);
    console.log("query", router.query);
};

export { logDifferentRoutesFromRouter };
