import React, { Component } from 'react';


const experiences = [
    {
        title: 'Tax & litigation specialist',
        heading: "Direction générale des Finances publiques",
        description: [
            "Reviewed complex income tax and other taxes returns.",
            "Managed litigation process files:  from written reply to applicant’s claim to written statement of defence and rejoinders.",
            "Proceeded to tax adjustments."],
        dates: 'September 2014 - Present',
    },
    {
        title: 'hHR & Ergonomics specialist',
        heading: 'Airbus (formerly EADS)',
        description: [
            "Supported design solution process with French ergonomics’ methodology.",
        ],
        dates: 'April 2013 - November 2013',
    },
    {
        title: 'HR marketing / Campus manager',
        heading: 'Veolia environnement',
        description: [
            "Organized Veolia’s participating to higher education job fairs with its 4 divisions represented.",
            "Successfully presented Veolia and its jobs in front of University or Grandes Ecoles’ students.",
            "Managed an IT project: department’s database and procresses from Microsoft Access to a mySQL solution, to sing-user to multiple-users."
        ],
        dates: 'September 2011 - September 2012',
    },
    {
        title: 'HR transformation Junior consultant',
        heading: 'IBM - Global Business Services',
        description: [
            "Analyzed two major clients companies’ learning department:  technology and processes transformed, from paperwork routine to an e-learning solution.",
            "Presented project deliverables and results in front of clients HR executives.",
            "Designed users’ manual  and designed teams meetings supports (videos and      presentations)."
        ],
        dates: 'January 2011 - September 2011',
    },
    {
        title: 'HR officer in Diversity & Inclusion - Program department',
        heading: 'IBM - Sales & Distribution',
        description: [
            "Supported hiring consultants, technicians and managers: screened resume from sourcing actions (job fairs, online events) to direct applications.",
            "Designed intranet pages with articles written, video and photo of special events."
        ],
        dates: 'September 2009 - January 2011',
    },
    {
        title: 'Service-client manager',
        heading: 'Téléperformance',
        description: [
            "Managed 7 nutritionists & 5 customer representatives for a big foods & beverages industry client.",
            "Organized team's shifts.",
            "Modified client's regarding legislative change and client's needs.",
            "Controlled calls quality."
        ],
        dates: 'March 2007 - May 2009',
    },
    {
        title: 'Service-client manager',
        heading: 'Astus',
        description: [
            "Managed up-to 11 service-client representatives & telephone sellers for a variety of clients (medical offices, restaurants, real-estate offices, elevator maintenance companies, Paris Bar association).",
            "Organized team's shifts",
            "Designed new client's scripts & modified current ones regarding legislative change and client's needs.",
            "Controlled calls quality."
        ],
        dates: 'September 2005 - February 2007',
    },
    {
        title: 'Service-client manager',
        heading: 'RGcom',
        description: [
            "Managed up-to 11 telephone sellers for a taxation advisor company.",
            "Organized team's shifts & scheduled appointments with clients.",
            "Modified current ones regarding legislative change and client's needs.",
            "Controlled calls quality & helped sellers during their speech."
        ],
        dates: 'May 2002 - August 2005',
    },
]

const Desc = ({ desc }) => {
    return (
        <p>· {desc}</p>
    )
}

const Exp = ({ exp }) => {
    return (
        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
                <h3 class="mb-0">{exp.title}</h3>
                <div class="subheading mb-3">{exp.heading}</div>
                {exp.description.map(desc => {
                    return (
                        <Desc desc={desc} />
                    )
                })}
            </div>
            <div class="resume-date text-md-right padding-top">
                <span class="text-primary">{exp.dates}  </span>
            </div>
        </div>
    )
}


// const Exp = ({ exp }) => {
//     return (
//         <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
//             <div class="resume-content">
//                 <h3 class="mb-0">{exp.title}</h3>
//                 <div class="subheading mb-3">{exp.heading}</div>
//                 <p>{exp.description}</p>
//             </div>
//             <div class="resume-date text-md-right">
//                 <span class="text-primary">{exp.dates}  </span>
//             </div>
//         </div>
//     )
// }


class Experience extends Component {
    render() {
        return (
            <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
                <div class="w-100">
                    {experiences.map(exp => {
                        return (
                            <Exp exp={exp} />
                        )
                    })}
                </div >
            </section >
        )
    }
}

export default Experience;