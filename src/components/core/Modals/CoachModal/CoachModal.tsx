"use client";
import React, { useState } from "react";
import Modal from "../Modal/Modal";

type TCoachModal = {
  onClose: () => void;
};

const coaches = [
  "John Doe",
  "Jane Smith",
  "David Johnson",
  "Emily Brown",
  "Michael Wilson",
  "Sarah Martinez",
  "Robert Anderson",
  "Jennifer Taylor",
  "William Thomas",
  "Linda Garcia",
];

export default function CoachModal({ onClose }: TCoachModal) {
  const [modalOpen, setModalOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  const filteredCoaches = coaches.filter((coach) =>
    coach.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Modal isOpen={modalOpen} onClose={closeModal}>
      <div className="p-4 max-h-80 overflow-y-auto">
        <input
          type="text"
          placeholder="Search coach..."
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul>
          {filteredCoaches.map((coach, index) => (
            <li
              key={index}
              className={`py-2 ${index % 2 === 0 ? "bg-gray-100" : ""}`}
            >
              {coach}
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
}
