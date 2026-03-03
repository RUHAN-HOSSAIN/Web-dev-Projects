// Passing Data via Props. => 50 min 30 sec

import { useState } from "react";


interface Props {
    items: string[];
    heading: string;
}

function ListGroup2({items, heading} : Props){

    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <br /><br />
            <h1>{heading}</h1>

            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        key={item}
                        
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item"}

                        onClick={() => setSelectedIndex(index)}
                    >
                        {item}
                    </li>

                ))}
            </ul>
        </>
    );
}

export default ListGroup2;