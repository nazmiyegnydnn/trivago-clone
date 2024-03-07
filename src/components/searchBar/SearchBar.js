import React, { useState } from 'react';
import "./SearchBar.scss";
import { Input, DatePicker, Button , Form} from "antd";
import ModalFilter from "../modalFilter/ModalFilter"
import { DownOutlined } from '@ant-design/icons';
import GuestFilter from '../guestFilter/GuestFilter';
import { useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import moment from 'moment';


const SearchBar = ({openModal ,setOpenModal , setOpenFiltiring, setTrivagoDownload ,setFilterOtelData }) => {
  const { otelDatas } = useSelector((state) => state.app);
  const [inputAdultValue, setInputAdultValue] = useState(0);
  const [inputChildValue, setInputChildValue] = useState(0);
  const [inputRoomValue, setInputRoomValue] = useState(0);

  const handleModalOpen = (modalName) => {
    setOpenModal(modalName);
  };
  const handleModalClose = () => {
    setOpenModal(null);
  };

const { handleSubmit, watch , control } = useForm({
  defaultValues: {
    city: 'Ankara'
  }
});

const onSubmit = (data) => {
  console.log(data);
  const formattedDate = moment(data?.entranceDate).format("DD-MM-YYYY");
  console.log(formattedDate);

const filteredOtelData = otelDatas?.filter((otel) => {
  const isCityMatch = otel?.city?.toLowerCase().includes(data.city.toLowerCase());
    // Burada giriş ve çıkış tarihlerini de kontrol edebilirsiniz
    // Örneğin, eğer tarihler belirlenmişse, o tarih aralığına uyan otelleri filtreleyebilirsiniz.
    // const isDateMatch = otel?.date >= formattedEntranceDate && otel?.date <= formattedExitDate;
  return isCityMatch; // && isDateMatch; eklenebilir, tarih filtresi eklenmiş hali
});

  setFilterOtelData(filteredOtelData);
  setOpenFiltiring(true)
  setTrivagoDownload(false)
} 


console.log(watch("entranceDate"))
console.log(watch("exitDate"))


  return (
    <Form onFinish={handleSubmit(onSubmit)} >
    <div className= "searchBar">
      <div className="search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="pointer-events-none max-h-full max-w-full"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="2"
          >
            <path
              d="M10 3a7 7 0 107 7 7 7 0 00-7-7zM21 21l-6-6"
              vector-effect="non-scaling-stroke"
            ></path>
          </g>
        </svg>
        <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Input placeholder="Gidilecek Yer"
              {...field}
              />
            )}
        />
      </div>
      <div className="searchDate">
          <Controller
            name="entranceDate"
            control={control}
            render={({ field }) => (
              <DatePicker {...field} />
            )}
          />
          <Controller
            name="exitDate"
            control={control}
            render={({ field }) => (
              <DatePicker {...field} />
            )}
          />
      </div>
      <div className="searchRoom">
        <ModalFilter 
          width={"400px"}
          height={"300px"}
          top={"35px"}
          icon={<DownOutlined/>}
          isOpen={openModal === 'GuestFilter'}
          onOpen={() => handleModalOpen('GuestFilter')}
          onClose={handleModalClose}
          setInputAdultValue={setInputAdultValue}
          setInputChildValue={setInputChildValue}
          setInputRoomValue={setInputRoomValue}
          >
            <GuestFilter
                inputAdultValue={inputAdultValue}
                setInputAdultValue={setInputAdultValue}
                inputChildValue={inputChildValue}
                setInputChildValue={setInputChildValue}
                inputRoomValue={inputRoomValue}
                setInputRoomValue={setInputRoomValue}
            />
          </ModalFilter>
      </div>  
      <div className="searchButton">
      <Button 
        htmlType="submit">
        ARA
      </Button>
      </div>
    </div>
    </Form>

    

  );
};

export default SearchBar;
