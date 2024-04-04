"use client";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { Select, SelectItem } from "@nextui-org/react";

type TCityModal = {
  onClose: () => void;
};

export const cities = [
  { id: 1, txt: "New York" },
  { id: 2, txt: "Los Angeles" },
  { id: 3, txt: "Chicago" },
  { id: 4, txt: "Houston" },
  { id: 5, txt: "Phoenix" },
];

export default function CityModal({ onClose }: TCityModal) {
  const [modalOpen, setModalOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  const filteredCities = cities.filter((city) =>
    city.txt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = ( city: any) => {
    console.log(city.txt)
    onClose();
  }

  return (
    <Modal isOpen={modalOpen} onClose={closeModal}>
      <div className="p-4 max-h-80 overflow-y-auto">
        <input
          type="text"
          placeholder="Search city..."
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul>
          {filteredCities.map((city, index) => (
            <li
              key={index}
              className={`py-2 px-2 ${index % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-300 cursor-pointer`}
              onClick={() => handleClick(city)}
            >
              {city.txt}
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
}
