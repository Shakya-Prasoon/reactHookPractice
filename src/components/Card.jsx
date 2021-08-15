const Card = (props) => {

    const {employer, jobTitle, universityName, uuid} = props
    // console.log(employer, jobTitle, universityName);
    
    return (<span 
                key= {uuid}>
					{employer}, &nbsp; 
					{jobTitle} - &nbsp; 
					{universityName}
        </span>
    )
}

export default Card
