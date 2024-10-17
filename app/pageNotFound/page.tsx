import { Image } from "@nextui-org/react";

const PageNotFound = () => {
    return (
        <main className="main-content">
            {/* pageNotFound Area */}
            <section className="page-not-found-area">
                <div className="container mx-auto">
                    <div className="page-not-found text-center flex flex-col items-center">
                        <Image
                            src="https://via.placeholder.com/975x538"
                            width={975}
                            height={538}
                            alt="Image"
                            className="mb-4"
                        />
                        <h3 className="title text-3xl font-semibold mt-4">Opps! You Lost</h3>
                        <h5 className="back-btn mt-4 text-lg">
                            Go to <a href="/" className="text-[#ff6565] underline">Home</a> Page
                        </h5>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PageNotFound;
