import React from 'react'
import FilteredRooms from '../components/FilteredRooms/FilteredRooms';
import RoomsBanner from '../components/RoomsBanner/RoomsBanner';
import SortRoomForm from '../components/RoomsSortForm/SortRoomForm';

function RoomsScreen() {
  return (
    <div>
      <RoomsBanner />
      <SortRoomForm />
      <FilteredRooms />
    </div>
  )
}

export default RoomsScreen