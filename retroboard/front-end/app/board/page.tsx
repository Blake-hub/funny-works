'use client'

import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import Column from "./column/column"
import Data from "../data/mockdata";
import './styles.css';
import { useEffect, useState } from 'react';

export default function Page() {

    const [data, setData] = useState(Data);

    const movecard = (colid: number, itemid: string) => {
        debugger;
        const newData = [...data];
        const colIndex = newData.findIndex((col) => col.columnId === colid);
        if (colIndex !== -1) {
            // const itemIndex = newData[colIndex].items.findIndex((item) => item.userId === itemid);
            // if (itemIndex !== -1) {
            //     newData[colIndex].items.splice(itemIndex, 1);
            // }
            var targetItem:any = null;
            newData.map((col)=> {
                col.items.map((item)=> {
                    if (item.userId === itemid) {
                        targetItem = {...item};
                        col.items.splice(col.items.indexOf(item), 1);
                    }
                })
                });
        }
        if (targetItem !== null) {
            newData[colIndex].items.push(targetItem);
        }
        console.log("newData", newData);
        setData(newData);
    }

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
                movecard(destinationLocation.columnId as number, sourceLocation.cardId as string);
                return;
            }
        })
    },[data]);
    return <div className="board">
        {data
            .sort((col1, col2) => col1.order - col2.order)
            .map((column) => 
                <Column key={column.columnId} 
                        columnId={column.columnId} 
                        title={column.title} 
                        items={column.items} 
                        order={column.order} />
        )}
        </ div>
}