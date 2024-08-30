import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Chicken Biriyani",
            image: "/img/gallery/image_4.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
        }, 
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/image_5.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
        },
        {
            title: "Prawn Biriyani",
            image: "/img/gallery/image_6.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
        },
        {
            title: "Vanjaram Fry",
            image: "/img/gallery/image_7.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
        },
        {
            title: "Chicken Tikka",
            image: "/img/gallery/image_10.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
        },
        {
            title: "Chicken Pepper Fry",
            image: "/img/gallery/image_9.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
        }, 
        {
            title: "Prawn Manjurian",
            image: "/img/gallery/images_11.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
        },
        {
            title: "Chicken 65",
            image: "/img/gallery/image_13.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
        },
        {
            title: "Tandoori",
            image: "/img/gallery/image_2.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
        },
        {
            title: "Butter Chicken",
            image: "/img/gallery/image_3.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
        },
        {
            title: "Malai Kofta",
            image: "/img/gallery/image_1.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
        },
        {
            title: "Kadai Chicken",
            image: "/img/gallery/image_8.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}