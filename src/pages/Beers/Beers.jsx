import { useEffect, useState } from "react";


const Beers = () => {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers')
            .then(res => res.json())
            .then(data => setBeers(data))
    }, [])
    return (
        <div>
            <h1>{beers.length}</h1>
        </div>
    );
};

export default Beers;