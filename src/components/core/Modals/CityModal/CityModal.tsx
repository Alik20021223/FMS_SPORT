"use client";
import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { Select, SelectItem } from "@nextui-org/react";
import axios from "axios";
import { useAppSelector } from "@/redux/hooks";

type TCityModal = {
  onClose: () => void;
};

export default function CityModal({ onClose }: TCityModal) {
  const [modalOpen, setModalOpen] = useState(true);
  const userData = useAppSelector(state => state.personal);
  const [city, setCity] = useState<string>(userData.city || '');
  const [addressList, setAddressList] = useState<any[]>([]);

  useEffect(() => {
    showPrompt()
  }, [city])

  function showPrompt() {
    axios.post('/suggestions/api/4_1/rs/suggest/address', { 
      query: city,
      from_bound: { value: "city" },
      to_bound: { value: "city" } 
    }, {
      headers: {
        'Authorization': 'Token 8ea8222f7a7784ba26078fb524744d19355e1b3c'
      }
    }).then((res: any) => {
      setAddressList(res.data.suggestions)
    })
  }

  function selectAddress(address: any) {
    setCity(address.data.city) 
    setAddressList([])
    setTimeout(() => updateHandler(), 100)
  }

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
        <input
          type="text"
          placeholder="Search city..."
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <ul>
          {addressList.map((city, index) => (
            <li
              key={index}
              className={`py-2 px-2 ${index % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-300 cursor-pointer`}
              onClick={e => selectAddress(city)}
            >
              {city.value}
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
}
