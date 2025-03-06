import React, { useEffect} from "react"
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"


const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext();

    useEffect(() => {
        const fetchWorkouts = async () => {

        try {
            const response = await fetch("http://localhost:4000/api/workouts/")
            
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            
        
            const json = await response.json();

            console.log("Workouts: ", json)

                dispatch({type: 'SET_WORKOUTS', payload: json})
            } catch (error) {
                console.error("Fetch Error: ", error)
            } 
        }

        fetchWorkouts()
    }, [dispatch])

    return(
        <div className="home">
            <div title="workouts" className="workouts">
                {workouts && workouts.map((workout) => {
                    return <WorkoutDetails key={workout._id} workout={workout}/>
                })}    
            </div>
            <WorkoutForm />       
        </div>
    )
}

export default Home;