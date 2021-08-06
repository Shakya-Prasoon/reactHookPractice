import React, { Component } from 'react'
import PropTypes from 'prop-types'

const NewEntry = props => {
    return(
        <form>
            <label for="university">University Name</label>
            <input name="university"></input>

            <label for="specializaiton">Specialization</label>
            <input name="specializaiton"></input>

            <label for="graduationYear">>Graduation Year</label>
            <input name="graduationYear"></input>

            <label for="employer">Employer</label>
            <input name="employer"></input>

            <label for="jobTitle">Job Title</label>
            <input name="jobTitle"></input>

            <label for="jobStartDate">Job Start Date</label>
            <input name="jobStartDate"></input>

            <label for="careerUrl">Career Url</label>
            <input name="careerUrl"></input>

        </form>
    )
}
export default NewEntry
