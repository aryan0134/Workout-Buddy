const express = require('express')
const { createWorkout,getWorkouts,getWorkout,deleteWorkout,updateWorkout } = require('../controllers/workoutControllers')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//Require Auth For All Workouts
router.use(requireAuth)

//GET all workouts
router.get('/', getWorkouts )

//GET single workout
router.get('/:id', getWorkout )

//POST a new workout
router.post('/' , createWorkout )

//DELETE a workout
router.delete('/:id' , deleteWorkout )

//UPDATE a workout
router.patch('/:id' , updateWorkout )



module.exports = router