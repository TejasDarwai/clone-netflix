import React from 'react';
import Banner from './Banner';
import "./HomeScreen.css";
import Nav from './Nav';
import requests from './Requests';
import Row from './Row';
import Footer from './Footer'

function HomeScreen() {
    return (
        <div className="homepage">
            <Nav />
            <Banner />
            <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="TRENDING NOW" fetchURL={requests.fetchTrending} />
            <Row title="TOP RATED" fetchURL={requests.fetchTopRated} />
            <Row title="COMEDY" fetchURL={requests.fetchComedyMovies} />
            <Row title="ROMANCE" fetchURL={requests.fetchRomanceMovies} />
            <Row title="ACTION" fetchURL={requests.fetchActionMovies} />
            <Row title="HORROR" fetchURL={requests.fetchHorrorMovies} />
            <Row title="DOCUMENTARIES" fetchURL={requests.fetchDocumentaries} />
            <Footer />
             
            
        </div>
    )
}

export default HomeScreen
