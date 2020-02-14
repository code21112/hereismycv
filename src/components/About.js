import React, { Component } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'


class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: 'Christophe',
            lastName: 'Bensmaine',
            address: '313 WEST 82nd Street 10024 New York city',
            phontNumber: '',
            email: 'christophe.bensmaine@laposte.net',
            objective: 'My main goal is to find a great IT job as a web developer.',
            objectiveSmallDevices: 'My main goal is to find a great IT job as a web developer.',
            bio: '',
            socials: {
                linkedin: "https://www.linkedin.com/in/sandyludosky/",
                github: "https://github.com/code21112",
            }
        }
    }



    handleChangeFirstName = (e) => {
        console.log(e.target.value);
        let input = e.target.value
        this.setState({
            firstName: input
        })
    }

    handleChangeLastName = (e) => {
        console.log(e.target.value);
        let input = e.target.value
        this.setState({
            lastName: input
        })
    }

    handleSubmit = () => {

    }

    render() {
        return (
            <section>
                <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                    <div class="w-100">
                        <p id="firstName" class="d-none d-sm-block">{this.state.firstName}</p>
                        <h3 class="mb-0 d-none d-sm-block" id="lastName">{this.state.lastName}
                            <span class="text-primary"></span>
                        </h3>
                        {/* <div class="subheading mb-5">{this.state.address} (317) 585-8468 · */}
                        <div class="subheading mb-5 d-none d-md-block d-lg-block d-xl-block" id="email">{this.state.address} {this.state.phoneNumber}
                            <a href="mailto:name@email.com">{this.state.email}</a>
                        </div>
                        <h4 id="objective" class="d-none d-sm-block">{this.state.objective}</h4>
                        <h4 id="objectiveSmallDevices" class="d-block d-sm-none">{this.state.objectiveSmallDevices}</h4>
                        <p class="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                        <div className="social-icons">

                            <a href={this.state.socials.linkedin}>
                                {/* <i className="fab fa-linkedin-in"></i> */}
                                <FontAwesomeIcon className="fab" icon={faLinkedin} />
                            </a>
                            <a href={this.state.socials.github}>
                                {/* <i class="fab fa-github"></i> */}
                                <FontAwesomeIcon className="fab" icon={faGithubSquare} />
                            </a>
                            {/* <a href="'https://twitter.com/San10Ludosky'">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="">
                                <i class="fab fa-facebook-f"></i>
                            </a> */}
                        </div>
                    </div>
                </section>
                {/* <div class="row">
                    <div class="col-12 offset-1">
                        <a href="#form" class="nav-link js-scroll-trigger">Form</a>
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); this.handleSubmit() }}>
                        <div class="form-group col-12 offset-4">
                            <label for="exampleInputEmail1">Your first name</label>
                            <input
                                onChange={(e) => this.handleChangeFirstName(e)}
                                value={this.state.firstName}
                                type="text"
                                class="form-control"
                            />
                        </div>
                        <div class="form-group col-12 offset-4">
                            <label for="">Your last name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="lastName"
                                onChange={(e) => this.handleChangeLastName(e)}
                                value={this.state.lastName}
                            />
                        </div>
                        <div class="form-group form-check col-12 offset-4">
                            <input
                                type="checkbox"
                                class="form-check-input"
                                id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary col-12 offset-4">Submit</button>
                    </form> */}


                {/* <form>
                        <div class="col-12">
                            <input onChange={(e) => this.handleChange(e)} placeholder="your first name">
                            </input>
                        </div>
                        <div>
                            <input onChange={(e) => this.handleChange(e)} placeholder="your last name"></input>

                        </div>
                        <div>
                            <input onChange={(e) => this.handleChange(e)} placeholder="your address"></input>

                        </div>
                        <div>
                            <input onChange={(e) => this.handleChange(e)} placeholder="your zipcode"></input>

                        </div>
                        <div>
                            <input onChange={(e) => this.handleChange(e)} placeholder="your city"></input>

                        </div>
                        <div>
                            <input onChange={(e) => this.handleChange(e)} placeholder="your first name"></input>

                        </div>
                    </form> */}

                {/* </div> */}
            </section >
        )
    }
}

export default About;



