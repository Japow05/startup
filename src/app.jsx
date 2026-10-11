import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
  <div className="body bg-primary text-light lato-regular">
    <header className="container-fluid">
            <nav className="navbar fixed-top navbar-dark">
                <a className="navbar-brand" href="#">Memory Madness</a>
                <menu className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="play.html">Play</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="scores.html">Leaderboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about.html">About</a>
                    </li>
                </menu>
            </nav>
        </header>
        
    <main>Cool test</main>

    <footer class="bg-primary text-white-50">
            <div class="container-fluid">
                <span class="text-reset">Jackson P</span>
                <a class="text-reset" href="https://github.com/Japow05/startup">GitHub</a>
            </div>
        </footer>
  </div>

  );
}

