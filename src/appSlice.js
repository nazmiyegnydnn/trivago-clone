import { createSlice } from '@reduxjs/toolkit'
import Otel from "../src/images/Otel.jpg"
import moment from 'moment'; 

const generateRandomDate = () => {
    const start = moment().subtract(30, 'days');
    const end = moment().add(30, 'days');
    const randomDate = moment(start + Math.random() * (end - start));
    return randomDate.format('YYYY-MM-DD');
  };

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
            pool:"Havuz",
            entranceDate: generateRandomDate(),
            exitDate:generateRandomDate()
            
        },
        {
            id:2,
            img:Otel,
            city:"Ankara",
            name: "Kızılay Otel",
            price:"200TL",
            point:7,
            type:"Otel",
            star:2,
            pool:"Havuz",
            entranceDate: generateRandomDate(),
            exitDate:generateRandomDate()
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
            pool:"Havuz",
            entranceDate: generateRandomDate(),
            exitDate:generateRandomDate()
        },
        {
            id:4,
            img:Otel,
            city:"İzmir",
            name: "Konak Ev/Apart",
            price:"400TL",
            point:9,
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
            point:7,
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
            point:9,
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
            point:6,
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
            point:6,
            type:" Ev/Apart",
            star:2,
            spa:"spa"
        }
        
    ],
}
  

  export const appSlice =  createSlice({ 
    name: 'app',  
    initialState,
    reducers: {
   
    }
  })

  export const {} = appSlice.actions 

  export default appSlice.reducer 