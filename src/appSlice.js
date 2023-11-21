import { createSlice } from '@reduxjs/toolkit'
import Otel from "../src/images/Otel.jpg"
const initialState = { 
    otelDatas: [
        {
            id:1,
            img:Otel,
            city:"İstanbul",
            name: "Galata Otel",
            price:"100TL",
            point:8,
            type:"Otel",
            star:5,
            pool:"Havuz"
            
        },
        {
            id:2,
            img:Otel,
            city:"Ankara",
            name: "Kızılay Otel",
            price:"200TL",
            point:2,
            type:"Otel",
            star:2,
            pool:"Havuz"
        },
        {
            id:3,
            img:Otel,
            city:"Eskişehir",
            name: "Sazova Ev/Apart",
            price:"300TL",
            point:8,
            type:"Ev/Apart",
            star:4,
            pool:"Havuz"
        },
        {
            id:4,
            img:Otel,
            city:"İzmir",
            name: "Konak Ev/Apart",
            price:"400TL",
            point:4,
            type:"Ev/Apart",
            star:4,
            pool:"Havuz"
        },
         {
            id:5,
            img:Otel,
            city:"İstanbul",
            name: "Kızkulesi Otel",
            price:"500TL",
            point:7,
            type:"Otel",
            star:3,
            pool:"Havuz"
        },
        {
            id:6,
            img:Otel,
            city:"Ankara",
            name: "Koru Otel",
            price:"600TL",
            point:8,
            type:"Otel",
            star:5,
            spa:"spa"
        },
        {
            id:7,
            img:Otel,
            city:"İstanbul",
            name: "Taksim Otel",
            price:"800TL",
            point:8,
            type:"Otel",
            star:5,
            spa:"spa"
        },
        {
            id:8,
            img:Otel,
            city:"Ankara",
            name: "Konur Otel",
            price:"500TL",
            point:7,
            type:"Otel",
            star:2,
            spa:"spa"
        },
        {
            id:9,
            img:Otel,
            city:"İzmir",
            name: "Alaçatı Otel",
            price:"1000TL",
            point:8,
            type:"Otel",
            star:5,
            spa:"spa"
        },
        {
            id:10,
            img:Otel,
            city:"Eskişehir",
            name: "Espark Ev/Apart",
            price:"700TL",
            point:7,
            type:" Ev/Apart",
            star:2,
            spa:"spa"
        }
        
    ],
    filterOtelData:[],
}
  

  export const appSlice =  createSlice({ 
    name: 'app',  
    initialState,
    reducers: {
        filterTitle :(state , action) =>{ 
            const filterData = state.otelDatas?.filter((el) => el?.city?.toLowerCase()?.includes(action.payload.toLowerCase()));
            state.filterOtelData =  filterData   
          },
        
    }
  })

  export const {filterTitle} = appSlice.actions 

  export default appSlice.reducer 