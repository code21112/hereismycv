import React, { Component } from 'react';
import './App.css';
import profile from './photos/profileChris5.jpg';
// import profile from './profile.jpg';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';

class App extends Component {
  render() {
    return (
      <div>

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
          <a class="navbar-brand js-scroll-trigger" href="#page-top">
            <span class="d-block d-lg-none">Christophe Bensmaine</span>
            <span class="d-none d-lg-block">
              <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="" />
            </span>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="#about" class="nav-link js-scroll-trigger">About</a>
              </li>
              <li class="nav-item">
                <a href="#experience" class="nav-link js-scroll-trigger">Experience</a>
              </li>
              <li class="nav-item">
                <a href="#education" class="nav-link js-scroll-trigger">Education</a>
              </li>

            </ul>
          </div>
        </nav>

        <div class="container-fluid p-0">
          <About />
          <Experience />
          <Education />
        </div>

      </div>

    );
  }
}

export default App;
