'use client';
import React, { FC, useCallback } from 'react'
import { Button, Input } from "@nextui-org/react";
import { Participant, TableTourney } from '@/components/core/TableTourneyWatch/TableTourney';

import ReactFlow, { useNodesState, useEdgesState, addEdge, Node, Edge } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes: any[] = [
    {
        id: 'horizontal-1',
        sourcePosition: 'right',
        type: 'input',
        data: { label: 'Иванов' },
        position: { x: 0, y: 80 },
    },
    {
        id: 'horizontal-2',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Петров' },
        position: { x: 250, y: 0 },
    },
    {
        id: 'horizontal-3',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Иванов' },
        position: { x: 250, y: 160 },
    },
    {
        id: 'horizontal-4',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Кузьмин' },
        position: { x: 500, y: 0 },
    },
    {
        id: 'horizontal-5',
        sourcePosition: 'top',
        targetPosition: 'bottom',
        data: { label: 'Сидоров' },
        position: { x: 500, y: 100 },
    },
    {
        id: 'horizontal-6',
        sourcePosition: 'bottom',
        targetPosition: 'top',
        data: { label: 'Петров' },
        position: { x: 500, y: 230 },
    },
    {
        id: 'horizontal-7',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Иванов' },
        position: { x: 750, y: 50 },
    },
    {
        id: 'horizontal-8',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Петров' },
        position: { x: 750, y: 300 },
    },
];

const initialEdges: Edge[] = [
    {
        id: 'horizontal-e1-2',
        source: 'horizontal-1',
        type: 'smoothstep',
        target: 'horizontal-2',
        animated: true,
    },
    {
        id: 'horizontal-e1-3',
        source: 'horizontal-1',
        type: 'smoothstep',
        target: 'horizontal-3',
        animated: true,
    },
    {
        id: 'horizontal-e1-4',
        source: 'horizontal-2',
        type: 'smoothstep',
        target: 'horizontal-4',
        // label: 'edge label',
    },
    {
        id: 'horizontal-e3-5',
        source: 'horizontal-3',
        type: 'smoothstep',
        target: 'horizontal-5',
        animated: true,
    },
    {
        id: 'horizontal-e3-6',
        source: 'horizontal-3',
        type: 'smoothstep',
        target: 'horizontal-6',
        animated: true,
    },
    {
        id: 'horizontal-e5-7',
        source: 'horizontal-5',
        type: 'smoothstep',
        target: 'horizontal-7',
        animated: true,
    },
    {
        id: 'horizontal-e6-8',
        source: 'horizontal-6',
        type: 'smoothstep',
        target: 'horizontal-8',
        animated: true,
    },
];


// type TAddModal = {
//     data?: any;
// };

const participants: Participant[] = [
    { id: 1, name: 'Иванов' },
    { id: 2, name: 'Петров' },
    { id: 3, name: 'Сидоров' },
    { id: 4, name: 'Кузьмин' },
];


const WatchTourney = () => {

    const [nodes, _, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params: any) => setEdges((els) => addEdge(params, els)), []);

    return (
        <div className='w-[50%] rounded-lg bg-[#EEEEEE] h-full'>
            <div className='pt-[20px] pl-[4%] pr-[10%]'>
                Просмотр турнира

                <div className='flex justify-end'>
                    <Button className='bg-prime w-[30%] text-white hover:bg-prime-800'>
                        Вывести на экран
                    </Button>
                </div>
                <div className="h-[500px] w-full">

                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        fitView
                        attributionPosition="bottom-left"
                    ></ReactFlow>
                </div>

            </div>

        </div>
    )
}


export default WatchTourney