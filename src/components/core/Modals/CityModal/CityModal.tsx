"use client";
import React, { useState } from "react";
import Modal from "../Modal/Modal";

type TCityModal = {
  onClose: () => void;
};

export const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
];

export default function CityModal({ onClose }: TCityModal) {
  const [modalOpen, setModalOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              className={`py-2 ${index % 2 === 0 ? "bg-gray-100" : ""}`}
            >
              {city}
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
}
