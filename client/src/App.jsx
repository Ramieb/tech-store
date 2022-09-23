import React from "react";
import SearchBar from "./components/SearchBar";
import Products from "./components/Products";
import PriceFilter from './components/PriceFilter';
import CategoryFilter from './components/CategoryFilter';
import NavBar from './components/NavBar';
import Register from './components/Register';
import Login from './components/Login';

function App() {
    return (
        <main>
            <NavBar />
            <div className="everythingElse">
            <section className="filters">
                <p>TECHY</p>
                <PriceFilter /> <br />
                <CategoryFilter />
            </section>
            <section className = "page-contents">
            <SearchBar />
            <Products />
            <Register />
            <Login />
            </section>
            </div>
        </main>
    );
}

export default App;