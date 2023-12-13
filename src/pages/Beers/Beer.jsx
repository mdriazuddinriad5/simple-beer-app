import { Link } from "react-router-dom";


const Beer = ({ beer }) => {
    const { id, name, tagline, first_brewed, description, image_url, volume, ingredients } = beer;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className="h-32" src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{tagline}</p>
                    <div className="card-actions justify-start">
                        <Link to={`/details/${id}`}>
                            <button className="btn btn-ghost">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Beer;