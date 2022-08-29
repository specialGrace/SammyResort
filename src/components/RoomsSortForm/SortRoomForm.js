 import React, { useContext} from "react";
import { GlobalContext } from "../../Context";
 import styles from './SortRoomForm.module.css'

 const SortRoomForm = () => {
  const { rooms, maxPrice, maxSize, minSize, price, changeHandler, pets, breakfast } =
    useContext(GlobalContext);

    // I did Data manipulation here for types
  let majorTypes = rooms.map((room) => room.type);
   majorTypes = new Set(majorTypes);
  majorTypes = ["all", ...majorTypes];
  console.log(majorTypes);

   const types = majorTypes.map((type, i) => (
     <option key={i} value={type}>
       {type}
     </option>
   ));

    //  capacity
  let majorCapacities = rooms.map((room) => room.capacity);
  majorCapacities = new Set(majorCapacities);
   majorCapacities = [...majorCapacities];

   const capacities = majorCapacities.map((capacity, i) => (
    <option key={i} value={capacity}>
       {capacity}
     </option>
   ));

   return (
     <div className={styles.filterContainer}>
       <div className={styles.sectionTitle}>
       <h4>search rooms</h4>
     </div>
       <form className={styles.filterForm}>
         
        {/* type selector */}
         <div className={styles.formGroup}>
         <label htmlFor="type">room type</label>

           {/* type in state was passed into my select  */}
           <select name="type" id="type" onChange={changeHandler} className={styles.formControl}>
            {types}
           </select>
         </div>

          {/* capacity selector */}
         <div className={styles.formGroup}>
           <label htmlFor="capacity">capacity</label>
           <select name="capacity" id="capacity" onChange={changeHandler} className={styles.formControl}>
             {capacities}
           </select>
        </div>
         
         {/* price, minPrice and maxPrice input */}
         <div className={styles.formGroup}>
          <label htmlFor="price">Room price {price}</label>
         <input
             type="range"
             name="price"
             value={price}
             id="price"
             min={0}
             max={maxPrice}
             onChange={changeHandler}
             className={styles.formControl}
          />
        </div>
         <div className={styles.formGroup}>
           <label htmlFor="size">Room size</label>
           <div className={styles.sizeInputs}>
          <input
               type="number"
               name="minSize"
               value={minSize}
               id="size"
               onChange={changeHandler}
               className={styles.sizeInput}
          />
          <input
               type="number"
               name="maxSize"
               value={maxSize}
               id="size"
               onChange={changeHandler}
               className={styles.sizeInput}
           />
         </div>
           </div>
         {/* pet and breakfast checkbox */}
         <div className={styles.formGroup}>
           <div className={styles.singleExtra}>
           <label htmlFor="pets">Pet</label>
          <input
             type="checkbox"
            checked={pets}
            name="pet"
            id="pet"
            onChange={changeHandler}
          />
             </div>
           <div className={styles.singleExtra}>
          <label htmlFor="breakfast">Breakfast</label>
          <input
            type="checkbox"
            checked={breakfast}
            name="breakfast"
            id="breakfast"
            onChange={changeHandler}
           />
             </div>
        </div>
       </form>
     </div>
   );
};

 export default SortRoomForm;





























