'use client'

import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import Column from "./column/column"
import Data from "../data/mockdata";
import './styles.css';
import { useEffect, useState } from 'react';
export default function Page() {

    const [data, setData] = useState(Data);

    useEffect(() => {
        monitorForElements({
            onDrop: ({ source, location }) => {
                const destination = location.current.dropTargets[0];
				if (!destination) {
					return;
				}
                const destinationLocation = destination.data;
                const sourceLocation = source.data;
                console.log("Destination data is ->",destinationLocation, "Source data is ->",sourceLocation);
                return;
            }
        })
    },[data]);
    return <div className="board">
        {data.sort((col1, col2) => col1.order - col2.order).map((column) => <Column key={column.columnId} columnId={column.columnId} title={column.title} items={column.items} order={column.order}/>)}
        </ div>
}