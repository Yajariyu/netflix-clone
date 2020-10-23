import React from "react";
import "./App.css";
import request from "./request.js";
import Row from "./Row.js";
import Banner from "./Banner.js";
import Nav from "./Nav.js";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
        <Banner />
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={request.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={request.fetchTrending} />
        <Row title="Top Rated" fetchUrl={request.fetchComedyMovies} />
        <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={request.fecthHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={request.fecthRomanceMovies} />
        <Row
          title="Documentaries"
          fetchUrl={request.fecthDocumentariesMovies}
        />
      </header>
    </div>
  );
}

export default App;
