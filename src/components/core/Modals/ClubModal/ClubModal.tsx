"use client";
import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import axios from "axios";


type ClubModalProps = {
  onClose: () => void;
};

export default function ClubModal({ onClose }: ClubModalProps) {
  const [modalOpen, setModalOpen] = useState(true);
  const userData = useAppSelector(state => state.personal);
  const [club, setClub] = useState<any>();
  const [clubList, setClubList] = useState<any[]>([]);
  const [selectedClub, setSelectedClub] = useState<any>({})

  useEffect(() => {
    axios.get('/api/clubs', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
      }
    }).then(res => {
      setClubList(res.data?.clubs)
    })
  }, [])

  useEffect(()=> {
    setSelectedClub(clubList.find((item: any) => item.id.toString() === club))
  }, [club])

  function updateHandler() {
    axios.post('/api/club/'+ club +'/enter', {}, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
      }
    }).then(res => {
      location.reload();
    })
  }



  return (
    <Modal isOpen={modalOpen} onClose={onClose}>
      <Autocomplete
        label='Клуб'
        defaultItems={clubList}
        selectedKey={club}
        onSelectionChange={setClub}
        labelPlacement='outside'>
        {(item) => <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>}
      </Autocomplete>
      {club
        ? (
          <div>

            <div className="flex  items-center mb-4">
              <Image
                // src={selectedClub.logo}
                src={"/assets/img/club-logo.png"}
                width={100}
                height={100}
                alt=""
                className="rounded-full"
              />
              <div className="ml-8">
                <p className="text-base text-dark">Клуб "{selectedClub?.name}"</p>
                <p className="text-sm text-dark">г. {selectedClub?.city}</p>
              </div>
            </div>
            <Info label="Адрес" value={selectedClub?.address} />
            {/* <Info label="Дата основания" value={selectedClub.since} /> */}
            <Info label="Наличие акредитации" value={selectedClub?.accreditation} />
            <Info label="Телефон" value={selectedClub?.phone} />
            <Info label="Почта" value={selectedClub?.email} />
            <hr className="h-1 bg-gray-500" />

            <Info label="Глава клуба" value={selectedClub?.owner.name} />
            <Info label="Описание" value={selectedClub?.description} />
            <hr className="h-1 bg-gray-500" />
            <button onClick={updateHandler} className="w-full bg-dark text-white p-2 rounded-xl mt-2 text-base">Сохранить</button>
          </div>
        )
        : (<p className="mt-5">Вы не состаите в клубе!</p>)
      }

    </Modal>
  );
}
type TInfo = {
  label: string;
  value: string;
};
function Info({ label, value }: TInfo) {
  return (
    <div>
      <p className="text-xl text-dark">{label}</p>
      <p className="text-base text-dark ml-4">{value}</p>
    </div>
  );
}
