'use client'

import { array } from 'prop-types';
import React, { useState } from 'react';
import { ModalPoints } from '../Modals/ModalTourneyPoints/ModalPoints';
import { useDisclosure } from '@nextui-org/use-disclosure';

export type Participant = {
    id: number;
    name: string;
};

export type Match = {
    fighterOne: Participant;
    fighterTwo: Participant;
    pointA: number;
    pointB: number;
    protest: string;
    warning: number
};

export type Props = {
    participants: Participant[];
};


export const TableTourney = ({ participants: initialParticipants }: Props) => {
    const [participants, setParticipants] = useState(initialParticipants);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isMatch, setMatch] = useState<Match | undefined>(undefined);


    const matches: Match[] = [];
    initialParticipants.forEach((participant1, i) => {
        initialParticipants.forEach((participant2, j) => {
            if (i != j) {
                matches.push({
                    fighterOne: participant1,
                    fighterTwo: participant2,
                    pointA: 0,
                    pointB: 0,
                    protest: '09:12',
                    warning: 0
                });
            }
        });
    });

    const [matchPoints, setMatchPoints] = useState(matches);

    const handlePlusRow = (match: Match) => {
        // const matchIndex = matchPoints.findIndex(
        //     (m) => m.fighterOne.id === match.fighterOne.id && m.fighterTwo.id === match.fighterTwo.id
        // );

        // if (matchIndex !== -1) {
        //     const newMatchPoints = [...matchPoints];
        //     newMatchPoints[matchIndex] = {
        //         ...newMatchPoints[matchIndex],
        //         pointA: newMatchPoints[matchIndex].pointA + 1,
        //     };
        //     setMatchPoints(newMatchPoints);

        // }
        onOpen();
    };

    const handlePlusCol = (match: Match) => {
        // const matchIndex = matchPoints.findIndex(
        //     (m) => m.fighterOne.id === match.fighterOne.id && m.fighterTwo.id === match.fighterTwo.id
        // );

        // if (matchIndex !== -1) {
        //     const newMatchPoints = [...matchPoints];
        //     newMatchPoints[matchIndex] = {
        //         ...newMatchPoints[matchIndex],
        //         pointB: newMatchPoints[matchIndex].pointB + 1,
        //     };
        //     setMatchPoints(newMatchPoints);

        // }

        onOpen();
    };

    const getMatch = (fighterOneId: number, fighterTwoId: number) => {
        return matchPoints.find(
            (match) => match.fighterOne.id === fighterOneId && match.fighterTwo.id === fighterTwoId
        );
    };



    return (
        <>
            <table className='table w-full h-full border-separate border-spacing-0 overflow-hidden'>
                <thead>
                    <tr>
                        <th className='rounded-md w-[20%] h-[45px] bg-white border-2'></th>
                        {participants.map((participant) => (
                            <th className='rounded-md bg-white w-[20%] h-[45px] border-2 cursor-pointer' key={participant.id}>{participant.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {participants.map((rowParticipant) => (
                        <tr key={rowParticipant.id}>
                            <td className='rounded-md bg-white border-2 w-[20%] h-[45px] text-center cursor-pointer'>{rowParticipant.name}</td>
                            {participants.map((colParticipant) => {
                                const isSameParticipant = rowParticipant.id === colParticipant.id;
                                const cellBackground = isSameParticipant ? '#155783' : '';

                                if (isSameParticipant) {
                                    return (
                                        <td className='rounded-md  w-[20%] h-[45px]  border-2' style={{ backgroundColor: cellBackground }} key={colParticipant.id}></td>
                                    );
                                }

                                const match = getMatch(rowParticipant.id, colParticipant.id);


                                const handleClick = () => {
                                    setMatch(match)
                                    if (match) {
                                        if (colParticipant.id > rowParticipant.id) {
                                            handlePlusRow(match);
                                        } else {
                                            handlePlusCol(match);
                                        }
                                    }
                                };

                                return (
                                    <td key={colParticipant.id} className='w-[20%] h-[45px]'>
                                        {colParticipant.id > rowParticipant.id ? (
                                            <button onClick={handleClick} className={`rounded-md w-full h-full border-2 text-center ${match && match.pointB > match.pointA
                                                ? "bg-[#4AC24F]"
                                                : match && match.pointB < match.pointA
                                                    ? "bg-[#D42828]"
                                                    : "bg-white"
                                                }`}>
                                                {match && `${match.pointB}:${match.pointA}`}
                                            </button>
                                        ) : (
                                            <button onClick={handleClick} className={`rounded-md w-full h-full border-2 text-center ${match && match.pointB > match.pointA
                                                ? "bg-[#4AC24F]"
                                                : match && match.pointB < match.pointA
                                                    ? "bg-[#D42828]"
                                                    : "bg-white"
                                                }`}>
                                                {match && `${match.pointA}:${match.pointB}`}
                                            </button>
                                        )}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
            <ModalPoints
                isOpen={isOpen}
                onClose={onClose}
                onOpen={onOpen}
                data={isMatch}
            />
        </>
    );
};
