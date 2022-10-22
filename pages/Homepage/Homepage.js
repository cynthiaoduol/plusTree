import Image from 'next/image'
import React from 'react'
import styles from "./Homepage.module.css"

const Homepage = () => {
    return (
        <>
            <header className={styles.header}>
                <nav class="navbar navbar-expand-lg ">
                    <div class="container">
                        <a class="navbar-brand text-light" href="#">PlusTree</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2">
                                <li class="nav-item">
                                    <a class="nav-link text-light" href="#">Home</a>
                                </li>
                                <li class="nav-item mr-5">
                                    <a class="nav-link text-light" href="#">About Us</a>
                                </li>
                            </ul>
                            <button class="btn btn-success ml-4">Donate</button>
                        </div>
                    </div>
                </nav>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <div className={styles.container}>
                            <h1>Plant a tree & help save our Planet</h1>
                            <div className={styles.container}>
                                <p>Shortbread soufflé I love gummi bears dessert marzipan cake sweet. Danish sesame snaps sweet roll caramels chocolate pie tart. Pie I love donut jelly oat cake croissant I love. Carrot cake tart tiramisu candy halvah.</p>
                            </div>
                            <button type="button" class="btn btn-light">Plant your first tree</button>
                            <button type="button" class="btn btn-outline-light">Learn more about us</button>
                        </div>
                    </div>
                </section>
            </header>

            <section className={styles.main}>
                <div className={styles.cardsection}>
                    {/* <h1 class="text-light">Plant a tree</h1>
          <p class="text-light">Shortbread soufflé I love gummi bears dessert marzipan cake sweet. Danish sesame snaps sweet</p> */}
                    <div className={styles.cardgroup}>
                        <div class="card" style={{ width: "25%", boxShadow: "1px 1px 2px 2px whitesmoke" }}>
                            <Image src="/../public/image2.jpeg" alt="" width="100%" height={350} class="card-img-top" />
                            <div class="card-body ">
                                <p class="card-text">Some quick e                       xampmy-2le text to build on the card title and make up the bulk of the cards content.</p>
                            </div>
                        </div>
                        <div class="card" style={{ width: "25%" }}>
                            <Image src="/../public/image1.jpg" alt="" width="100%" height={350} class="card-img-top" />
                            <div class="card-body ">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            </div>
                        </div>
                        <div class="card" style={{ width: "25%" }}>
                            <Image src="/../public/image1.jpg" alt="" width="100%" height={350} class="card-img-top" />
                            <div class="card-body ">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            </div>
                        </div>
                        <div class="card" style={{ width: "25%" }}>
                            <Image src="/../public/image1.jpg" alt="" width="100%" height={350} class="card-img-top" />
                            <div class="card-body ">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 style={{ textAlign: "center" }}>How can you plant a tree</h2>
                    <div className={styles.container}>
                        <div className={styles.container}>
                            <div class="row bg-success">
                                <div class="col-6">
                                    <Image src="/../public/image3.jpeg" alt="" width={600} height={700} class="card-img-top" />
                                </div>
                                <div class="col-6 d-flex flex-column align-items-start">
                                    <h2>Your information is power</h2>
                                    <p>Candy canes tootsie roll oat cake pastry marzipan sugar plum liquorice tiramisu pie. Chocolate bonbon pie tootsie roll wafer cake chupa chups macaroon jelly-o. Carrot cake toffee gummies tootsie roll pastry pie jelly bonbon wafer. Toffee cake chocolate cake gummies lemon drops marshmallow cookie jelly-o. Pudding sweet danish sesame snaps macaroon sesame snaps gummi bears biscuit. Wafer pastry cotton candy sweet jelly-o cotton candy marshmallow sweet. </p>
                                    <button class="btn btn-light">Plant your first tree</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div class="row">
                        <div class="col-md-4">
                            <h1>Plustree</h1>
                            <p>Plus one tree minus one carbon</p>
                        </div>
                        <div class="col-md-4">
                            <h4>Quick links</h4>
                            <ul >
                                <li><a href=''>An active item</a></li>
                                <li><a href=''>An active item</a></li>
                                <li><a href=''>An active item</a></li>
                                <li><a href=''>An active item</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <h3>Want to receive updates from Us? Just subscribe to our newsletter </h3>
                            <div class="input-group mb-5 ">
                                <input type="text" class="form-control " placeholder="Email address" />
                                <button class="btn btn-outline-secondary" type="button">Subscribe</button>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Homepage