const express = require('express')
const { 
    createWorkout, 
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout,
} = require('../controllers/workoutController')

const router = express.Router();

//GET all workouts
router.get('/', getAllWorkouts)

//GET a single workout
router.get('/:id', getWorkout)

//POST a new workout
router.put('/', createWorkout);

//DELETE a workout
router.delete('/:id', deleteWorkout)

//UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router;