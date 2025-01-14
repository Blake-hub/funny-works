'use client'

import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';
import Column from "./column/column"
import Data from "../data/mockdata";
import './styles.css';
import { useEffect, useState } from 'react';

export default function Page() {

    const [data, setData] = useState(Data);

    const movecard = (colid: number, itemid: string, dragType: string, sourcecolumn: number) => {
        debugger;
        const newData = [...data];
        const colIndex = newData.findIndex((col) => col.columnId === colid);
        if(dragType === "card") {
            if (colIndex !== -1) {
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
            setData(newData);
        } else if (dragType === "column") {
            const sourcecinx = newData.findIndex((col) => col.columnId === sourcecolumn);
            if (colIndex !== -1 && sourcecinx !== -1){
                const targetorder = newData[colIndex].order;
                const sourceorder = newData[sourcecinx].order;
                const newdata1 = newData.map((col)=> {
                    if(col.columnId === sourcecolumn){
                        col.order = targetorder;
                    }else if(col.columnId === colid){
                        col.order =  sourceorder;
                    }
                    return col;
                });
                setData(newdata1);
            }
        }
        
        // console.log("newData", newData);
    }

    useEffect(() => {
        
        return combine(
            monitorForElements({
                onDrop: ({ source, location }) => {
                    const destination = location.current.dropTargets[0];
                    if (!destination) {
                        return;
                    }
                    const destinationLocation = destination.data;
                    const sourceLocation = source.data;
                    console.log("Destination data is ->",destinationLocation, "Source data is ->",sourceLocation);
                    movecard(destinationLocation.columnId as number, sourceLocation.cardId as string, sourceLocation.dragType as string, sourceLocation.columnId as number);
                    return;
                }
            }),
        )
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