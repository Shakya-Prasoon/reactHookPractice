import React, { useState, useEffect } from "react";
// import importedData from "../Student_Data.json";
import Card from "./Card.jsx";
import { v4 as uuidv4 } from "uuid";
import { LinearProgress } from '@material-ui/core';
import Post from "./Post.jsx";
import "../App.css";
import axios from "axios";

function TablePage() {
    const [favList, setFavList] = useState([]);
    const [data, setData] = useState([]);
    const [deleted, setDeleted] = useState([]);
    const [University_Name, setUniversity] = useState("");
    const [Specialization, setSpecialization] = useState("");
    const [Graduation_Year, setGraduationYear] = useState("");
    const [Employer, setEmployer] = useState("");
    const [Job_Title, setJobTitle] = useState("");
    const [Job_Start_Date, setJobStartDate] = useState("");
    const [Career_Url, setCareerUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingPosts, setIsLoadingPosts] = useState(false)
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    const [searchInput, setSearchInput] = useState('')
    const [currentPostPage, setCurrentPostPage] = useState(1)
    const [currentEmployerPage, setCurrentEmployerPage] = useState(1)
    const [totalEmployeeElement, setTotalEmployeeElement] = useState()
    const [totalPostElement, setTotalPostElement] = useState()

    // useEffect(() => {
    //     let newData = [...importedData];
    //     newData = newData.map((i) => {
	// 				return { ...i, id: uuidv4() };
    //     });
    //     setData(newData);
    // }, []);

    useEffect(() => {
        setIsLoading(true)
      axios.get('http://localhost:3001/users/getAllEntries')
        // .then(res => console.log(res.data))
        .then(res => {setData(res.data)
            setIsLoading(false)})
        .catch(() => {setIsLoading(false)})
    }, [])


    useEffect(() => {
        setIsLoadingPosts(true)
      axios.get('http://localhost:3001/getposts')
        // .then(res => console.log(res.data))
        .then(res => {setPosts(res.data)
            setIsLoadingPosts(false)})
        .catch(() => {setIsLoadingPosts(false)})
    }, [])

    useEffect(() => {
        setTotalEmployeeElement(data.length)
    }, [])
    useEffect(() => {
        setTotalPostElement(posts.length)
    }, [])




    // Map returns all the elements as an 'li' element
    const employerList = data
        .filter(i => (i.Employer.toLowerCase().includes(search) || i.Job_Title.toLowerCase().includes(search)  || i.University_Name.toLowerCase().includes(search)))
        .slice(((currentEmployerPage-1)*10)+1,((currentEmployerPage-1)*10)+11 )
        .map((obj) => (
        <li key={obj.id}>
            <Card 
                employer={obj.Employer}
                jobTitle={obj.Job_Title}
                universityName={obj.University_Name}
                uuid={obj.id}
            />
            <br />
            <button
                disabled={favList.includes(obj.Employer)}
                onClick={() => {handelFav(obj.Employer);}}>
                Favorite
            </button>
            <button
                disabled={!favList.includes(obj.Employer)}
                onClick={() => {handelUnFav(obj.Employer);}}>
                Un-Favorite
            </button>
            <button
                onClick={() => {removeElement(obj.id); }}>
                Delete
            </button>
        </li>
    ));
    
    function calculatePagesEmployer(){
        let elementCount =  totalEmployeeElement
        let pageCount = Math.ceil(elementCount/10)
        let pages = []
        for(let i= 1; i <= pageCount; i++){
            pages.push(i)
        }
        return pages
    }

    const postList = posts
        .filter(i => (i.title.toLowerCase().includes(search)))
        .slice(((currentPostPage-1)*10)+1,((currentPostPage-1)*10)+11 )
        .map(obj => {
        return (<li key={uuidv4()}><Post title={obj.title} /></li>)
    })
    function calculatePagesPost(){
        let elementCount =  totalPostElement
        let pageCount = Math.ceil(elementCount/10)
        let pages = []
        for(let i= 1; i <= pageCount; i++){
            pages.push(i)
        }
        return pages
    }


    function handelFav(employer) {
        let list = [...favList];
        if (!list.includes(employer)) {
					list.push(employer);
					setFavList(list);
        }
    }

    function handelUnFav(employer) {
        let list = [...favList];
        if (list.includes(employer)) {
					list.splice(list.indexOf(employer), 1);
					setFavList(list);
        }
    }

    function removeElement(compareId) {
        let list = [...data];
        let deletedElement =
					list[list.findIndex((x) => x.id === compareId)].Employer +
					"- " +
					list[list.findIndex((x) => x.id === compareId)].Job_Title;
        let deletedList = [...deleted, deletedElement];
        list.splice(
					list.findIndex((x) => x.id === compareId),
					1
        );
        setData(list);
        setDeleted(deletedList);
    }

    function addToTable(e) {
        e.preventDefault();
        e.stopPropagation();
        let newElement = {
            University_Name,
            Specialization,
            Graduation_Year,
            Employer,
            Job_Title,
            Job_Start_Date,
            Career_Url,
            id: uuidv4(),
        };
        let newDataList = [newElement, ...data];
        setData(newDataList);
    }

    function handleSearch(i){
        i.preventDefault()
        setSearch(searchInput)
    }

    function handleClear(i){
        i.preventDefault()
        setSearch('')
    }

    if(isLoading || isLoadingPosts){ 
        return(<>
        <LinearProgress />
        <LinearProgress color="secondary" />
        </>)
    }


    return (
    <div className="Main">
        <div className="recentlyDeleted">
            {`Recently Deleted: ${deleted.join(", ")}`}
        </div>
        <div className="favorite">
            {`Your Favorite employers are:${favList.join( ", ")}`}
        </div>
        <form className="input">
                <input onChange={(e) => setUniversity(e.target.value)}
                    type="text"
                    placeholder="University_Name"/>
                <input onChange={(e) =>setSpecialization(e.target.value)}
                    type="text"
                    placeholder="Specialization"/>
                <input onChange={(e) =>setGraduationYear(e.target.value)}
                    type="text"
                    placeholder="Graduation_Year"/>
                <input onChange={(e) => setEmployer(e.target.value)}
                    type="text"
                    placeholder="Employer"/>
                <input onChange={(e) => setJobTitle(e.target.value)}
                    type="text"
                    placeholder="Job_Title"/>
                <input onChange={(e) =>setJobStartDate(e.target.value)}
                    type="text"
                    placeholder="Job_Start_Date"/>
                <input onChange={(e) => setCareerUrl(e.target.value)}
                    type="text"
                    placeholder="Career_Url"/>
                <button onClick={(e) => addToTable(e)}
                    type="submit">
                    Add </button>
        </form>
        <form className="SearchBar">
            <input 
                onChange={(e) => setSearchInput((e.target.value).toLowerCase())} 
                htmlFor="searchSpace" 
                placeholder="Search Table" />

            <button onClick={(i) => handleSearch(i)} >Search</button>
            <button onClick={(i) => handleClear(i)} >clear</button>
        </form>
        <div className="bodySeparation">
            <div className="tablebody1">
                {calculatePagesEmployer().map(i => {
                    return <span onClick={() => setCurrentEmployerPage(i)} className="pagination">{` ${i} `}</span>
                })}
                <ul className="tableBody">{employerList}</ul>
            </div>
            <div className="tablebody2">
                {calculatePagesPost().map(i => {
                    return <span onClick={() => {setCurrentPostPage(i)}} className="pagination">{` ${i} `}</span>
                })}
                <ul className="tableBody">{postList}</ul>               
            </div>
        </div>
    </div>
    );
}

export default TablePage;
