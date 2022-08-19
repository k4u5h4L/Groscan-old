import { getNumberOfCategories } from "@/utils/commonUtils";
import { fetcher } from "@/utils/fetcher";
import { Category } from "@prisma/client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function CategoryMain() {
    const searchRef = useRef<any>();
    const totalCats = useRef<any>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            totalCats.current.value = await fetcher(`/api/categories`);
            setCategories(totalCats.current.value);
        };

        fetchCategories();
    }, []);

    const searchChangeHandler = (): void => {
        const search = searchRef.current.value;

        setCategories((prev) => {
            return totalCats.current.value.filter(
                (cat: Category) =>
                    cat.name.toLowerCase().includes(search.toLowerCase()) ||
                    cat.desc.toLowerCase().includes(search.toLowerCase())
            );
        });
    };

    return (
        <>
            <main className="app-content">
                <section className="px-3 pb-3 pt-1 bg-primary">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-primary-light border-0 form-control"
                        style={{ color: "white" }}
                        ref={searchRef}
                        onChange={searchChangeHandler}
                    />
                </section>

                <section>
                    <ul className="p-3 list-menu">
                        {categories.map((cat, index) => (
                            <li className="nav-item" key={index}>
                                <Link
                                    href={`/results?q=${encodeURIComponent(
                                        cat.name
                                    )}`}
                                >
                                    <a className="icontext">
                                        <span className="icon icon-sm rounded">
                                            <img
                                                src={cat.icon}
                                                alt=""
                                                width={26}
                                                height={26}
                                            />
                                        </span>
                                        <div className="text">
                                            <h6 className="title">
                                                {cat.name}
                                            </h6>
                                            <span className="text-muted">
                                                {cat.groceryIDs.length} item(s)
                                            </span>
                                        </div>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* <p className="text-center mx-3">
                    <a href="index.html" className="btn w-100 btn-light">
                        <i className="material-icons md-arrow_back"></i> More
                        pages
                    </a>
                </p> */}
                <br />
            </main>
        </>
    );
}

export default CategoryMain;
