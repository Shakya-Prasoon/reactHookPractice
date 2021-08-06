import React, { useState, useEffect } from "react";
import importedData from "../Student_Data.json";
import Card from "./Card.jsx";
import { v4 as uuidv4 } from "uuid";

import "../App.css";

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

    useEffect(() => {
        let newData = [...importedData];
        newData = newData.map((i) => {
					return { ...i, id: uuidv4() };
        });
        setData(newData);
    }, []);

    // Map returns all the elements as an 'li' element
    const employerList = data.map((obj) => (
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
                onClick={() => {
                    handelFav(obj.Employer);
                }}
            >
                Favorite
            </button>
            <button
                disabled={!favList.includes(obj.Employer)}
                onClick={() => {
									handelUnFav(obj.Employer);
                }}
            >
                Un-Favorite
            </button>
            <button
                onClick={() => {
									removeElement(obj.id);
                }}
            >
                Delete
            </button>
        </li>
    ));

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

    return (
    <div className="Home">
        <div className="recentlyDeleted">
                {`Recently Deleted: ${deleted.join(", ")}`}
        </div>
        <div className="favorite">
                {`Your Favorite employers are:${favList.join(
                        ", "
                )}`}
        </div>
        <form className="input">
                <input
                        onChange={(e) => setUniversity(e.target.value)}
                        type="text"
                        placeholder="University_Name"
                />
                <input
                        onChange={(e) =>
                                setSpecialization(e.target.value)
                        }
                        type="text"
                        placeholder="Specialization"
                />
                <input
                        onChange={(e) =>
                                setGraduationYear(e.target.value)
                        }
                        type="text"
                        placeholder="Graduation_Year"
                />
                <input
                        onChange={(e) => setEmployer(e.target.value)}
                        type="text"
                        placeholder="Employer"
                />
                <input
                        onChange={(e) => setJobTitle(e.target.value)}
                        type="text"
                        placeholder="Job_Title"
                />
                <input
                        onChange={(e) =>
                                setJobStartDate(e.target.value)
                        }
                        type="text"
                        placeholder="Job_Start_Date"
                />
                <input
                    onChange={(e) => setCareerUrl(e.target.value)}
                    type="text"
                    placeholder="Career_Url"
                />
                <button
                    onClick={(e) => addToTable(e)}
                    type="submit"
                >
                    Add
                </button>
        </form>
        <ul className="employerName">{employerList}</ul>
    </div>
    );
}

export default TablePage;
