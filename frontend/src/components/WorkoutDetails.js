import React from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from '../hooks/useAuthContext'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  const handleClick = async () => {

    if(!user){
      return
    }

    const response = await fetch('/api/workouts/' + workout._id , {
      method: 'DELETE',
      headers:{'Authorization': `Bearer ${user.token}`}
    })
    const json = await response.json()

    if(response.ok){
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }

  }

  return (
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Reps: </strong>{workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
        <span className='material-symbols-outlined' onClick={handleClick}>Delete</span>
    </div>
  )
}

export default WorkoutDetails