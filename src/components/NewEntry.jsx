import React, { Component } from 'react'
import PropTypes from 'prop-types'

const NewEntry = (setUniverisity, setSpecialization, setGraduation, setEmployer, setJobtitle, setJobstart, setCareer) => {
    return(
        <form class="newEntry">
            <span>
                <label for="university">University Name</label>
                <input onChange={e=> setUniverisity(e.target.value)} name="university"></input>
            </span>
            <span>
                <label for="specializaiton">Specialization</label>
                <input onChange={e=> setSpecialization(e.target.value)} name="specializaiton"></input>
            </span>
            <span>
                <label for="graduationYear">Graduation Year</label>
                <input onChange={e=> setGraduation(e.target.value)} name="graduationYear"></input>
            </span>
            <span>
                <label for="employer">Employer</label>
                <input onChange={e=> setEmployer(e.target.value)} name="employer"></input>
            </span>
            <span>
                <label for="jobTitle">Job Title</label>
                <input onChange={e=> setJobtitle(e.target.value)} name="jobTitle"></input>
            </span>
            <span>
                <label for="jobStartDate">Job Start Date</label>
                <input onChange={e=> setJobstart(e.target.value)} name="jobStartDate"></input>
            </span>
            <span>
                <label for="careerUrl">Career Url</label>
                <input onChange={e=> setCareer(e.target.value)} name="careerUrl"></input>
            </span>
        </form>
    )
}
export default NewEntry
