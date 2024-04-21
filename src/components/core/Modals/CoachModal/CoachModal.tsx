"use client";
import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import axios from "axios";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

type TCoachModal = {
  onClose: () => void;
};


export default function CoachModal({ onClose }: TCoachModal) {
  const [modalOpen, setModalOpen] = useState(true);
  const [coaches, setCoaches] = useState<any[]>([]) 
  const [coache, setCoache] = useState<any>() 

  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  useEffect(() => {
    axios.get('/api/user-sprotsmens', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
      }
    }).then(res => {
      setCoaches(res.data?.sportsmens)
    })
  }, [])

  function updateHandler() {
    // axios.post('/api/club/'+ club +'/enter', {}, {
    //   headers: {
    //     'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
    //   }
    // }).then(res => {
      location.reload();
    // })
  }

  return (
    <Modal isOpen={modalOpen} onClose={closeModal}>
      <Autocomplete
        label='Тренер'
        defaultItems={coaches}
        selectedKey={coache}
        onSelectionChange={setCoache}
        labelPlacement='outside'>
        {(item) => <AutocompleteItem key={item.id}>{`${item.surname} ${item.name} ${item.patronymic} `}</AutocompleteItem>}
      </Autocomplete>
      
      <div className="p-4 max-h-80 overflow-y-auto">
      <button onClick={updateHandler} className="w-full bg-dark text-white p-2 rounded-xl mt-2 text-base">Сохранить</button>
      </div>
    </Modal>
  );
}
