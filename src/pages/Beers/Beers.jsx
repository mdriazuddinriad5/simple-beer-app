import { useEffect, useState } from "react";
import Beer from "./Beer";

const Beers = () => {
    const [beers, setBeers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredBeers, setFilteredBeers] = useState([]);

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers')
            .then(res => res.json())
            .then(data => {
                setBeers(data);
                setFilteredBeers(data);
            });
    }, []);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = beers.filter(beer =>
            beer.name.toLowerCase().includes(term)
        );
        setFilteredBeers(filtered);
    };

    const handleClear = () => {
        setFilteredBeers(beers);
        setSearchTerm("");
    };

    return (
        <div>
            <div className="flex justify-center mb-10">
                <input
                    type="text"
                    placeholder="Search here"
                    className="input input-bordered input-primary w-full max-w-xs mr-2"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button className="btn btn-neutral" onClick={handleClear}>
                    Clear
                </button>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
                {filteredBeers.map(beer => (
                    <Beer key={beer.id} beer={beer}></Beer>
                ))}
            </div>
        </div>
    );
};

export default Beers;
