'use client'
import { useEffect, useRef, useState } from 'react';
import Card from '../cards/card';
import './styles.css'
import invariant from 'tiny-invariant';
import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

interface Item {
    userId: string;
    name: string;
    role: string;
    order: number;
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

export default function Column({columnId, title, items}: ColumnProps) {

    const ref = useRef(null);
	const [isDraggedOver, setIsDraggedOver] = useState(false);


	useEffect(() => {
		const el = ref.current;
		invariant(el);

		return dropTargetForElements({
			element: el,
            getData: () => ({ columnId }),
			onDragEnter: () => setIsDraggedOver(true),
			onDragLeave: () => setIsDraggedOver(false),
			onDrop: () => setIsDraggedOver(false),
		});
	}, []);
    const isDark = columnId % 2 === 1? true : false;
    return <div key={columnId+10} className="column" style={{ backgroundColor: getColor(isDraggedOver, isDark) }} ref={ref}>
        {title}
        {items.sort((it1, it2)=> it1.order - it2.order).map((item)=><Card key={item.userId} userId={item.userId} name={item.name} role={item.role} order={item.order}/>)}
        </div>;
}