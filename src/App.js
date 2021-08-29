import React from "react";
import "./App.css";
import requests from "./requests";

import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* Rows */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOrginials}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Rommance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
