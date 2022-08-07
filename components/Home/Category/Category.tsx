import { categoryData } from "@/databases/home/category";
import { CategoryType } from "@/types/databases";
import Link from "next/link";

function Category() {
    return (
        <>
            <section className="px-3 pt-3">
                <ul className="row">
                    {categoryData.map(
                        (category: CategoryType, index: number) => (
                            <li className="col-4" key={index}>
                                <Link href={category.hyperlink}>
                                    <a className="item-category-grid">
                                        <span className="icon-wrap">
                                            <img
                                                className="icon"
                                                height="32"
                                                src={category.icon}
                                                alt=""
                                            />
                                        </span>
                                        <small className="text">
                                            {" "}
                                            {category.name}
                                        </small>
                                    </a>
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </section>
        </>
    );
}

export default Category;
