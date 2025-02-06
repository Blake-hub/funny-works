'use client'
import { useEffect, useRef, useState } from 'react';
import Card from '../cards/card';
import './styles.css'
import invariant from 'tiny-invariant';
import { dropTargetForElements,draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';

type Coord = [number, number];
interface Item {
    userId: string;
    name: string;
    role: string;
    order: number;
    itemlocation: [number, number];
}
type ColumnProps = {
    columnId: number;
    title: string;
    items: Item[];
    order: number;
};

function getColor(isDraggedOver: boolean, isDark: boolean): string {
	if (isDraggedOver) {
		return 'skyblue';
	}
	return isDark ? 'lightgrey' : 'white';
}

export default function Column({columnId, title, items, order}: ColumnProps) {

    const ref = useRef(null);
	const [isDraggedOver, setIsDraggedOver] = useState(false);
    const [columndragging, setColumndragging] = useState(false);

	useEffect(() => {
		const el = ref.current;
		invariant(el);

		return combine(
            dropTargetForElements({
                element: el,
                getData: () => ({ colid:columnId }),
                onDragEnter: () => setIsDraggedOver(true),
                onDragLeave: () => setIsDraggedOver(false),
                onDrop: () => setIsDraggedOver(false),
		    }),
            draggable({
                element: el,
                onDragStart: () => setColumndragging(true), 
                onDrop: () => setColumndragging(false), 
                getInitialData: () => ({columnId, dragType: 'column' }),
            })
         );
	}, []);
    const isDark = order % 2 === 1? true : false;
    return <div key={columnId+10} className="column" style={{ backgroundColor: getColor(isDraggedOver, isDark), opacity: columndragging ? 0.5 : 1 }} ref={ref}>
        {title}
        {items.sort((it1, it2)=> it1.order - it2.order).map((item)=>
            <Card key={item.userId} 
                  userId={item.userId} 
                  name={item.name} 
                  role={item.role} 
                  order={item.order}
                  itemlocation={item.itemlocation} 
                  columnId={columnId} />
        )}
        </div>;
}