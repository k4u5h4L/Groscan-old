import { bannerData } from "@/databases/home/banner";
import { BannerType } from "@/types/databases";
import Link from "next/link";

function Banner() {
    return (
        <>
            <section className="px-3 pb-2 pt-1 bg-primary scroll-horizontal">
                {bannerData.map((banner: BannerType, index: number) => (
                    <div className="item-lg" key={index}>
                        <article
                            className="card card-banner"
                            style={{
                                height: "160px",
                                backgroundImage: `url('${banner.imageSrc}')`,
                            }}
                        >
                            <div className="card-body caption">
                                <h5
                                    className="card-title mb-3"
                                    style={{ whiteSpace: "pre-line" }}
                                >
                                    {banner.name}
                                </h5>
                                <Link href={banner.hyperlink}>
                                    <a className="btn btn-sm btn-warning">
                                        {banner.buttonText}
                                    </a>
                                </Link>
                            </div>
                        </article>
                    </div>
                ))}
            </section>
        </>
    );
}

export default Banner;
