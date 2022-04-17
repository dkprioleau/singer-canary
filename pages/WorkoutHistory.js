import React from "react";
import HamburgerMenu from "../components/HamburgerMenu";
export default function WorkoutHistory() {
  {/*Create a list of workouthistory items
    Whenever the user clicks 'Complete Workout' the workout item gets saved automatically to this list*/}

  const WorkoutHistoryList = ({})
  
  return (
    <>
      <HamburgerMenu />
      <ul>
      {/* Need to create WorkoutHistoryItem
      {WorkoutHistoryList.map((item) => (
       <WorkoutHistoryItem key = {item.id} todo = {item}/>
       ))}
      */}
    </ul>
    </>
);

}
