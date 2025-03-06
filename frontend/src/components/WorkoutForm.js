import { useState } from "react"; 
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const { dispatch } = useWorkoutsContext();


    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = {title, weight, reps};

        const response = await fetch('http://localhost:4000/api/workouts/', {
            method:'PUT',
            mode: 'cors',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json"
                
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if (response.ok) {
            setTitle('')
            setWeight('')
            setReps('')
            setError(null)
            setEmptyFields([])
            console.log("New workout added", json)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }

    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Excersize Title:</label>
            <input 
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Weight (in lbs):</label>
            <input 
                type='number'
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
                className={emptyFields.includes('weight') ? 'error' : ''}
            />
            
            <label>Amount of Reps: </label>
            <input 
                type='number'
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                className={emptyFields.includes('reps') ? 'error' : ''}
            />

            <button type='submit'>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm;