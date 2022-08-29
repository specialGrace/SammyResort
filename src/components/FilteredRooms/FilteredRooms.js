import React, { useContext } from 'react'
import {GlobalContext} from '../../Context'
import ResortRooms from '../ResortRooms/ResortRooms';
import styles from './FilteredRooms.module.css'

const FilteredRooms = () => {
   const { filteredRooms } = useContext(GlobalContext);
   console.log(filteredRooms);
    return (
       <div className={styles.filteredRooms}>
        <div className={styles.filteredRoomsCenter}>
          {filteredRooms && filteredRooms.length > 0 ? (
            filteredRooms.map((rooms) => (
              <ResortRooms key={rooms.id} rooms={rooms} />
            ))
          ) : (
            <h2 className={styles.NoRoom}>No room Found</h2>
          )}
        </div>
      </div>
    );
}

export default FilteredRooms