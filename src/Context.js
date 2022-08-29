import React, { useState, useEffect } from 'react'
import Data from './Data'

const GlobalContext = React.createContext()

const Provider = ({ children }) => {
  const [state, setState] = useState({
    rooms: localStorage.getItem("rooms")
      ? JSON.parse(localStorage.getItem("rooms"))
      : [],
    featuredRooms: [],
    filteredRooms: [],
    loading: true,
    type: "all",
    price: 0,
    maxPrice: 0,
    maxSize: 0,
    minSize: 0,
    capacity: 1,
    pets: false,
    breakfast: false
  });

  useEffect(() => {
    loadInitialState();
  }, []);

  

  // load Initial State
    const loadInitialState = () => {
        const temptRooms =[...Data]
        // console.log(temptRooms)
        let rooms = temptRooms.map((room) => {
            let newRoom = {
                id: room.sys.id,
                ...room.fields,
                images: room.fields.images.map((img)=>img.fields.file.url)
            }
            return newRoom
        })
      
      

        const featuredRooms = rooms.filter((room) =>room.featured===true) 

      const prices=rooms.map((room)=> room.price)
      const maxPrice = Math.max(...prices)
      
      const sizes=rooms.map((room)=> room.size)
      const maxSize = Math.max(...sizes)
       const minSize = Math.min(...sizes);
      // console.log(maxPrice, maxSize)

        setState({
          ...state,
          rooms,
          featuredRooms,
          filteredRooms: rooms,
          loading: false,
          maxPrice,
          maxSize,
          minSize,
          price: maxPrice
        });
        localStorage.setItem('rooms', JSON.stringify (rooms))
    }

  
  const changeHandler = (e) => {
    // const { value, name} = e.target
    // console.log(value, name)
    const type =e.target.type
    const name = e.target.name;
    const value = type === 'checkbox' ? e.target.checked : e.target.value;
    // console.log(name, value)

    setState({
      ...state,
      [name]: value
    })

    let filteredRm = [...state.rooms]
    // console.log(filteredRm)

    // condition for room type selector
    if (name === 'type' && value !== 'all') {
      filteredRm = filteredRm.filter((room) => room.type === value);
      // console.log('filtered', filtered)
    }

    // condition for capacity selector
    if (name === 'capacity' && parseInt(value) !== 1) {
      filteredRm = filteredRm.filter((room) => room.capacity === parseInt(value));
      // console.log('filtered', filtered)
    }

    // condition for my range input
    if (name === "price") {
      filteredRm = filteredRm.filter((room) => room.price <= state.price && room.price <= state.maxPrice)
    }

    // condition for room size input
    // console.log(parseInt('minSize', state.minSize));
    // console.log(parseInt("maxSize", state.maxSize));
      filteredRm = filteredRm.filter((room) => room.size >= parseInt (state.minSize) && room.size<= parseInt(state.maxSize))
    
    // condition for pet and breakfast checkbox
    if (type === 'checkbox') {
      filteredRm = filteredRm.filter((room) => room.pets === true && room.breakfast === true);
    }
    
    
    setState((prev) => ({
      ...prev,
      filteredRooms: filteredRm
    }))
  }
  // console.log(state.capacity)
  
  const getSingleRoom = (slug) => {
      // console.log('called')
        const tempRooms= state.rooms
        const foundRoom = tempRooms.find((room) => room.slug === slug)
        return foundRoom
    }
      useEffect(() => {
          getSingleRoom()
      }, [])

  //     const newData = () => {
  //         let Rooms = Data.map((room) => ({
  //             id: room.sys.id,
  //             name: room.fields.name,
  //             slug:room.fields.slug,
  //             type:room.fields.type,
  //             price:room.fields.price,
  //             size:room.fields.size,
  //             capacity:room.fields.capacity,
  //             pets: room.fields.pets,
  //             breakfast:room.fields.breakfast,
  //             featured:room.fields.featured,
  //             description: room.fields.description,
  //             extras: room.fields.extras,
  //             images: room.fields.images.map((item) => item.fields.file.url)

  //         }

  //         ))
  //        console.log(newData);
  //         setState({
  //             ...state,
  //             rooms: Rooms
  //         })
  //     }
  // {console.log('context room', state.rooms)}
  return (
    <div>
      <GlobalContext.Provider value={{ ...state, getSingleRoom, changeHandler}}>
        {children}
      </GlobalContext.Provider>
    </div>
  );
}

const Consumer = GlobalContext.Consumer

export {Consumer, Provider, GlobalContext} 
