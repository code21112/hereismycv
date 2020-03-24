import React, { Component } from 'react';

const education = [
    {
        school: 'La Capsule',
        degree: '',
        description: 'IT bootcamp on Javascript (with React, Redux & React Native courses)',
        grade: '',
        dates: 'September 2019 - December 2019'
    },
    {
        school: 'Le Wagon',
        degree: '',
        description: 'IT bootcamp on Ruby & Ruby on Rails',
        grade: '',
        dates: 'July 2019 - September 2019'
    },
    {
        school: 'École nationale des Finances publiques',
        degree: '',
        description: 'One-year French service public scolarship for new IRS inspectors',
        grade: '',
        dates: 'September 2014 - September 2015'
    },
    // {
    //     school: 'Conservatoire national des Arts et métiers',
    //     degree: 'Master of Ergonomics',
    //     description: '',
    //     grade: '',
    //     dates: 'Octobre 2012 - October 2013'
    // },
    {
        school: 'IAE / Sorbonne graduate business school',
        degree: 'Master of business administration',
        description: "Minor on international project management",
        grade: 'Suma cum laude',
        dates: 'September 2011 - September 2013'
    },
    {
        school: 'Institut de gestion sociale',
        degree: "Responsable de la gestion, du personnel et de l'emploi",
        description: 'HR professional degree',
        grade: '',
        dates: 'September 2009 - September 2011'
    },
    {
        school: 'Afpa',
        degree: '',
        description: 'Professional degree on client-service management',
        grade: '',
        dates: 'November 2008 - May 2009'
    },
]

const Educ = ({ educ }) => {
    return (
        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
                <h3 class="mb-0">{educ.school}</h3>
                <div class="subheading mb-3">{educ.degree}</div>
                <div>{educ.description}</div>
                <p class="oblique">{educ.grade}</p>
            </div>
            <div class="resume-date text-md-right padding-top">
                <span class="text-primary">{educ.dates}</span>
            </div>
        </div>

        // <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        //     <div class="resume-content">
        //         <h3 class="mb-0">University of Colorado Boulder</h3>
        //         <div class="subheading mb-3">Bachelor of Science</div>
        //         <div>Computer Science - Web Development Track</div>
        //         <p>GPA: 3.23</p>
        //     </div>
        //     <div class="resume-date text-md-right">
        //         <span class="text-primary">August 2006 - May 2010</span>
        //     </div>
        // </div>
    )
}

class Education extends Component {
    render() {
        return (
            <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
                <div class="w-100">
                    {education.map(educ => {
                        return [
                            <Educ educ={educ} />
                        ]
                    })}
                </div>
            </section>
        )
    }
}

export default Education;