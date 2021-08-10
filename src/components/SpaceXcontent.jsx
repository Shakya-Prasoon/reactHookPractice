import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { LinearProgress } from '@material-ui/core';
import { v4 as uuidv4 } from "uuid";

function SpaceXcontent({filterContent, content}) {
    const space = ['History', 'Rockets', 'Ships']
    const [isLoadingPosts, setIsLoadingPosts] = useState(true)
    const [history, setHistory] = useState([])
    const [rockets, setRockets] = useState([])
    const [ships, setShips] = useState([])

    useEffect(() => {
        setIsLoadingPosts(true)
      axios.get('http://localhost:3001/spaceX/history')
        .then(res => {setHistory(res.data)
            setIsLoadingPosts(false)})
        .catch(() => {setIsLoadingPosts(false)})
    }, [])

    useEffect(() => {
        setIsLoadingPosts(true)
      axios.get('http://localhost:3001/spaceX/rockets')
        .then(res => {setRockets(res.data)
            setIsLoadingPosts(false)})
        .catch(() => {setIsLoadingPosts(false)})
    }, [])

    useEffect(() => {
        setIsLoadingPosts(true)
      axios.get('http://localhost:3001/spaceX/ships')
        .then(res => {setShips(res.data)
            setIsLoadingPosts(false)})
        .catch(() => {setIsLoadingPosts(false)})
    }, [])

    function history_f(){
        let data = history
            .filter(i => (i.title.toLowerCase().includes(filterContent) || i.event_date_utc.toLowerCase().includes(filterContent) || i.details.toLowerCase().includes(filterContent)))
            .map((i) => (
            <li key={uuidv4()}><h3>{`${i.title}`}</h3>  {`Date: ${i.event_date_utc}`}    <p>{`${i.details}`}</p></li>
        ))
        return data
    }
    function rocket_f(){
        let data = rockets
            .filter(i => (i.first_flight.toLowerCase().includes(filterContent)|| i.country.toLowerCase().includes(filterContent)))
            .map((i) => (
            <li key={uuidv4()}><h3>{`Rocket${i.id}`}</h3>{` First-flight: ${i.first_flight}`} <br/>  {`Country: ${i.country}`}</li>
        ))
        return data
    }
    function ship_f(){
        let data = ships
            .filter(i => (i.ship_name.toLowerCase().includes(filterContent) || i.home_port.toLowerCase().includes(filterContent)))
            .map((i) => (
            <li key={uuidv4()}><h3>{`${i.ship_name}`}</h3>{`Home Port: ${i.home_port} `}</li>
        ))
        return data
    }

    if (isLoadingPosts){
        return(<>
            <LinearProgress />
            <LinearProgress color="secondary" />
            </>)
    }

    switch(content){
        case 0:{
            return(<><h1>{space[content]}</h1>
                <ul>
                    {history_f()}
                </ul>
            </>)
        }
        case 1:{
            return(<><h1>{space[content]}</h1>
                <ul>
                    {rocket_f()}
                </ul>
            </>)
        }
        default:{
            return(<><h1>{space[content]}</h1>
                <ul>
                    {ship_f()}
                </ul>
            </>)
        }
    }
}

export default SpaceXcontent
