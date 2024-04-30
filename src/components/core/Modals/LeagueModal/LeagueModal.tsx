"use client";
import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { Autocomplete, AutocompleteItem, Select, SelectItem } from "@nextui-org/react";
import axios from "axios";
import { useAppSelector } from "@/redux/hooks";

type TLeagueModal = {
  onClose: () => void;
};

export default function LeagueModal({ onClose }: TLeagueModal) {
  const [modalOpen, setModalOpen] = useState(true);
  const userData = useAppSelector(state => state.personal);
  const [league, setLeague] = useState<any>(userData.league?.id);
  const [leagueList, setLeagueList] = useState<any[]>([]);

  useEffect(() => {
    axios.get('/api/leagues', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
      }
    }).then(res => {
      setLeagueList(res.data.data)
    })
  }, [])

  function updateHandler() {
    axios.put('/api/profile/edit', {
      ...userData,
      league: league
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
          label='Лига'
          defaultItems={leagueList}
          selectedKey={league}
          onSelectionChange={setLeague}
          labelPlacement='outside'>
          {(item) => <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>}
        </Autocomplete>
        <button onClick={updateHandler} className="w-full bg-dark text-white p-2 rounded-xl mt-2 text-base">Сохранить</button>
      </div>
    </Modal>
  );
}
