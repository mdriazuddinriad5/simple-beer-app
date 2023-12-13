import { useLoaderData } from "react-router-dom";
import "./Beer.css";

const BeerDetails = () => {
    const [beer] = useLoaderData();

    return (
        <div className="beer-container bg-gray-100 p-4 md:p-8 flex flex-col md:flex-row lg:items-center lg:justify-around">
            <img
                src={beer.image_url}
                alt={beer.name}
                className="rounded-md shadow-md mb-4 md:mb-0 lg:w-1/4"
            />
            <div className="beer-details text-left">
                <h1 className="text-2xl font-bold text-blue-500 mb-2">{beer.name}</h1>
                <p className="text-gray-700 mb-2">{beer.tagline}</p>
                <p className="text-gray-800 mb-4">{beer.description}</p>
                <p className="text-gray-800 mb-2">ABV: {beer.abv}%</p>
                <p className="text-gray-800 mb-4">IBU: {beer.ibu}</p>
                <p className="text-gray-800 mb-2">First Brewed: {beer.first_brewed}</p>
                <h2 className="text-lg font-bold text-blue-500 mb-2">Ingredients</h2>
                <div>
                    <h3 className="text-md font-bold mb-1">Malt</h3>
                    <ul className="list-disc pl-4 mb-4">
                        {beer.ingredients.malt.map((malt, index) => (
                            <li key={index} className="text-gray-800">
                                {malt.name} - {malt.amount.value} {malt.amount.unit}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-bold mb-1">Hops</h3>
                    <ul className="list-disc pl-4 mb-4">
                        {beer.ingredients.hops.map((hop, index) => (
                            <li key={index} className="text-gray-800">
                                {hop.name} - {hop.amount.value} {hop.amount.unit} ({hop.add}, {hop.attribute})
                            </li>
                        ))}
                    </ul>
                </div>
                <p className="text-gray-800 mb-2">Yeast: {beer.ingredients.yeast}</p>
                <h2 className="text-lg font-bold text-blue-500 mb-2">Food Pairing</h2>
                <ul className="list-disc pl-4 mb-4">
                    {beer.food_pairing.map((food, index) => (
                        <li key={index} className="text-gray-800">
                            {food}
                        </li>
                    ))}
                </ul>
                <p className="text-gray-800 mb-2">Brewer&apos;s Tips: {beer.brewers_tips}</p>
                <p className="text-gray-800">Contributed By: {beer.contributed_by}</p>
            </div>
        </div>
    );
};

export default BeerDetails;