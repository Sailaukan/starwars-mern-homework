import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./HomePage.module.css";



const HomePage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [planets, setPlanets] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:4000/planets/')
            .then((response) => {
                setPlanets(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return (
        <div className={classes.mainWrapper}>
            <main className={classes.mainContent}>
                Loading...
            </main>
        </div>
    );
    if (error) return (
        <div className={classes.mainWrapper}>
            <main className={classes.mainContent}>
                Error: {error}
            </main>
        </div>
    );


    const fetchDataAndStore = async () => {
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:4000/planets/sw-share');
            console.log(response.data.message);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError(error.message);
            setLoading(false);
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredPlanets = planets.filter((planet) =>
        planet.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={classes.mainWrapper}>
            <main className={classes.mainContent}>
                <h1 className={classes.title}>StarWikis</h1>
                <section className={classes.section}>
                    <h2 className={classes.sectionTitle}>Planets</h2>
                    <button onClick={fetchDataAndStore}>Fetch and Store Data</button>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}

                    <section className={classes.section}>
                        <h2 className={classes.sectionTitle}>Planets</h2>
                        <input
                            type="text"
                            placeholder="Search planets by name"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className={classes.searchBar}
                        />
                        <ul className={classes.cardGrid}>
                            {filteredPlanets.map((planet) => (
                                <li key={planet._id} className={classes.card}>
                                    <h3>{planet.title}</h3>
                                    <p>Population: {planet.population}</p>
                                    <p>Climate: {planet.climate}</p>
                                    <p>Terrain: {planet.terrain}</p>
                                </li>
                            ))}
                        </ul>
                    </section>

                </section>
            </main>
        </div>
    );
};

export default HomePage;





// const HomePage = () => {
//     const [planets, setPlanets] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         setLoading(true);
//         axios
//             .get('http://localhost:4000/planets/')
//             .then((response) => {
//                 setPlanets(response.data.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.log(error);
//                 setError(error.message);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) return (
//         <div className={classes.mainWrapper}>
//             <main className={classes.mainContent}>
//                 Loading...
//             </main>
//         </div>
//     );
//     if (error) return (
//         <div className={classes.mainWrapper}>
//             <main className={classes.mainContent}>
//                 Error: {error}
//             </main>
//         </div>
//     );

//     return (
//         <div className={classes.mainWrapper}>
//             <main className={classes.mainContent}>
//                 <h1 className={classes.title}>StarWikis</h1>
//                 <section className={classes.section}>
//                     <h2 className={classes.sectionTitle}>Planets</h2>
//                     <ul className={classes.cardGrid}>
//                         {planets.map((planet) => (
//                             <li key={planet._id} className={classes.card}>
//                                 <h3>{planet.title}</h3>
//                                 <p>Population: {planet.population}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </section>
//             </main>
//         </div>
//     );
// };

// export default HomePage;