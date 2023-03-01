import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 import { GlobalContext} from '../../Context'
import styles from "./SingleRoomImages.module.css";

 const SingleRoomImages = () => {
   const [room, setRoom] = useState(null);
   const [loading, setLoading] = useState(true);
   const { getSingleRoom } = useContext(GlobalContext);
   const { slug } = useParams();
  //  console.log(slug);

   useEffect(() => {
     if (!room || slug !== room.slug) {
       const rm = getSingleRoom(slug);
       setRoom(rm);
       setLoading(false);
     }
   }, [slug]);
   console.log(room);

   return (
     <div>
       {loading && <h2>Loading...</h2>}
       {room && ( <div className={styles.singleRoom}>
         <div >
           {room.images.length > 0 &&
             room.images.map((img, i) => (
               <img key={i} src={img} alt={room.name} className={styles.singleRoomImages}/>
             ))}
           </div>
           <div className={styles.singleRoomInfo}>
             <div className={styles.description}>
               <h3>details</h3>
               <p>{room.description ? room.description : ""}</p>
             </div>
             <div className={styles.information}>
               <h3>Info</h3>
               <h6>Price: ${room.price ? room.price : ""}</h6>
               <h6>Size: ${room.size ? room.size : ""}</h6>
               <h6>Max Capacity:{room.capacity  ? room.capacity : ""}</h6>
               <h6>Pet is allowed</h6>
               <h6>Free Breakfast Included</h6>
             </div>
           </div>
         </div>
       )}
     </div>
   );
 };
 export default SingleRoomImages;

  