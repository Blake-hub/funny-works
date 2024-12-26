'use client'
import { useEffect, useRef, useState } from 'react';
import invariant from 'tiny-invariant';
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

import './styles.css'

type CardProps = {
    userId: string;
    name: string;
    role: string;
    order: number;
    itemlocation: [number, number];
}
export default function Card({userId, name, role, order, itemlocation=[0,0]} : CardProps) {

    const ref = useRef<HTMLDivElement>(null);
    const [dragging, setDragging] = useState<boolean>(false); // recording if the card is being dragged, than fade the card whlie dragging.

    useEffect(() => {
        const el = ref.current;
        invariant(el);

        return draggable({
            element: el,
            onDragStart: () => setDragging(true), 
            onDrop: () => setDragging(false), 
            getInitialData: () => ({ cardId: userId, order: order, itemlocation}),
        });
    }, []);
    return <div className="card" ref={ref} style={dragging ? { opacity: 0.5 } : {}}>{name}:{role}</div>;
}