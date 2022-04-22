import React from 'react';
import ExerciseItem from './ExerciseItem.js'

const ExerciseItem = () => {//should the list be collapsible?

    return(
        <ul>
      {todoList.map((item) => (
       <ExerciseItem key = {item.id} onRemoveWorkoutItem={onRemoveWorkoutItem}  />//where will the remove buttons?
       ))}
    </ul>
    );

};

export default WorkoutItem;