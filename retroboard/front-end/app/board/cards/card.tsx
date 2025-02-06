'use client'
import { use, useEffect, useRef, useState } from 'react';
import invariant from 'tiny-invariant';
import { draggable, dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';
import {
	attachClosestEdge,
	type Edge,
	extractClosestEdge,
} from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';
import Divider from '@mui/material/Divider';
import { DropIndicator } from '@atlaskit/pragmatic-drag-and-drop-react-drop-indicator/box';
import { token } from '@atlaskit/tokens';

import './styles.css'

type CardProps = {
    columnId: number;
    userId: string;
    name: string;
    role: string;
    order: number;
    itemlocation: [number, number];
}
export default function Card({columnId, userId, name, role, order, itemlocation=[0,0]} : CardProps) {

    const ref = useRef<HTMLDivElement>(null);
    const [dragging, setDragging] = useState<boolean>(false); // recording if the card is being dragged, than fade the card whlie dragging.

    const [closestEdge, setClosestEdge] = useState<Edge | null>(null);

    useEffect(() => {
        const el = ref.current;
        invariant(el);

        return combine(
                draggable({
                    element: el,
                    onDragStart: () => setDragging(true), 
                    onDrop: () => setDragging(false), 
                    getInitialData: () => ({ colid: columnId ,cardId: userId, order: order, itemlocation, dragType: 'card' }),
                }),
                dropTargetForElements({ 
                    element: el,
                    canDrop: () => true,
                    getData: ({input, element}) => {
                        const data = {colid: columnId , cardId: userId, order: order, itemlocation, dragType: 'card' };
                        return attachClosestEdge(data, { input,
                            element,
                            allowedEdges: ['top', 'bottom'] });
                    },
                    onDragEnter: (args) => { 
                        if (args.source.data.cardId !== userId) {
                            const tempcloedge = extractClosestEdge(args.self.data);
                            console.log('tempEdge->onDragEnter', tempcloedge);
						    setClosestEdge(tempcloedge);
                        }
                    },
                    onDragLeave: () => {setClosestEdge(null);},
                    onDrop: () => {setClosestEdge(null);}
                })
            );
    }, []);
    return <>
        <div className="card" ref={ref} style={dragging ? { opacity: 0.5 } : {}}>{name}:{role}</div>
        {closestEdge && <Divider orientation="horizontal" sx={{ backgroundColor: token('color.background.neutral', '#A5621EFF'), width: '100%' }} />}
        </>;
}