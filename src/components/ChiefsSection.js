import ChiefCard from "./ChefCard"

export default function ChiefsSection(){
    const chiefs = [
        {
            name: "Damodharan",
            img: "/img/top-chiefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Indian",
        },
        {
            name: "Venkatesh Bhat",
            img: "/img/top-chiefs/img_3.jpg",
            recipesCount: "13",
            cuisine: "Indian",
        },
        {
            name: "Sanjeev Kapoor",
            img: "/img/top-chiefs/img_2.jpg",
            recipesCount: "13",
            cuisine: "Indian",
        },
        {
            name: "Rangaraj",
            img: "/img/top-chiefs/img_4.jpg",
            recipesCount: "08",
            cuisine: "Indian"
        },
        {
            name: "Ranveer Brar",
            img: "/img/top-chiefs/img_5.jpg",
            recipesCount: "09",
            cuisine: "Indian"
        },
        {
            name: "Shreeya Adka",
            img: "/img/top-chiefs/img_6.jpg",
            recipesCount: "04",
            cuisine: "Indian"
        }
    ]
    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}
                { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) }
            </div>
        </div>
    )
}