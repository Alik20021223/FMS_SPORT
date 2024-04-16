"use client";
import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { Autocomplete, AutocompleteItem, Select, SelectItem } from "@nextui-org/react";
import axios from "axios";
import { useAppSelector } from "@/redux/hooks";

type TCityModal = {
  onClose: () => void;
};

export default function CityModal({ onClose }: TCityModal) {
  const [modalOpen, setModalOpen] = useState(true);
  const userData = useAppSelector(state => state.personal);
  const [city, setCity] = useState<any>(userData.city || '');
  const [cityList, setCityList] = useState<any[]>([]);

  // useEffect(() => {
  //   showPrompt()
  // }, [city])

  function showPrompt(value: string) {
    axios.post('/suggestions/api/4_1/rs/suggest/address', {
      query: value,
      from_bound: { value: "city" },
      to_bound: { value: "city" }
    }, {
      headers: {
        'Authorization': 'Token 8ea8222f7a7784ba26078fb524744d19355e1b3c'
      }
    }).then((res: any) => {
      setCityList(res.data.suggestions)
    })
  }

  // function selectAddress(address: any) {
  //   setCity(address.data.city) 
  //   setAddressList([])
  // }

  function updateHandler() {
    axios.put('/api/profile/edit', {
      ...userData,
      city
    }, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
      }
    }).then(res => {
      location.reload();
    })
  }

  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  return (
    <Modal isOpen={modalOpen} onClose={closeModal}>
      <div className="p-4 max-h-80 overflow-y-auto">
        <Autocomplete
          label='Город'
          items={cityList}
          selectedKey={city}
          onSelectionChange={setCity}
          onInputChange={showPrompt}
          labelPlacement='outside'>
          {(item) => <AutocompleteItem key={item.data.city}>{item.value}</AutocompleteItem>}
        </Autocomplete>
        <button onClick={updateHandler} className="w-full bg-dark text-white p-2 rounded-xl mt-2 text-base">Сохранить</button>
      </div>
    </Modal>
  );
}
