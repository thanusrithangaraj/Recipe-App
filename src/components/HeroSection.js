import CustomImage from "./CustomImage"

export default function HeroSection(){
    const images = [
        "/img/gallery/img 1.jpg",
        "/img/gallery/img 2.jpg",
        "/img/gallery/img 3.jpg",
        "/img/gallery/img 4.jpg",
        "/img/gallery/img 5.jpg",
        "/img/gallery/img 6.jpg",
        "/img/gallery/img 7.jpg",
        "/img/gallery/img 8.jpg",
        "/img/gallery/img 9.jpg"
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">FoodiesHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now.</p>
                <button className="btn">explore now</button>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )) }
            </div>
        </div>
    )
}