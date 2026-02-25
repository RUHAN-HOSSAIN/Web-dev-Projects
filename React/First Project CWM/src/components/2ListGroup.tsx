// import { Fragment } from "react";
import { MouseEvent, useState } from "react";

function ListGroup() {
// 1.
  // return (
  //     <ul className="list-group">
  //         <li className="list-group-item">Cras justo odio</li>
  //         <li className="list-group-item">Dapibus ac facilisis in</li>
  //         <li className="list-group-item">Morbi leo risus</li>
  //         <li className="list-group-item">Porta ac consectetur ac</li>
  //         <li className="list-group-item">Vestibulum at eros</li>
  //     </ul>
  // );

// 2. To use multiple element, wrap those inside <div> or,, Use <Fragment> ,, or <></>
  // return (
  //     <Fragment>
  //         <h1>Bootstrap auto list</h1>
  //         <ul className="list-group">
  //             <li className="list-group-item">Cras justo odio</li>
  //             <li className="list-group-item">Dapibus ac facilisis in</li>
  //             <li className="list-group-item">Morbi leo risus</li>
  //             <li className="list-group-item">Porta ac consectetur ac</li>
  //             <li className="list-group-item">Vestibulum at eros</li>
  //         </ul>
  //     </Fragment>
  // );

// 3.
  let items = ["Dhaka", "Rajshahi", "Pabna", "Santhia", "Dhulauri"];
  // items = [];

  
  ///4.
  // const getMessage = items.length === 0 ? <p>List is empty</p> : null;
  // or,
  const getMessage = () => {
    return items.length === 0 && <p>List is empty!</p>;
  };
  
  
  ///5.
  // EventHandler, onclick er maddome handle kora bad diye alada function banano valo upai.
  const handleClick = (event: MouseEvent) => {  // (... : MouseEvent) Type anotation
      console.log(event);
  };

  ///6.
  // let selectedIndex = 0;     // aita korle dynamically value change hoi na!!, tar jonno 'useStage' use kora hoiceh!
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  return (
    <>
      <br /><br />
      <h1>List</h1>

      {getMessage()}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            // className="list-group-item active"
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}

            // onClick={() => console.log(item, index)
            // onClick={(event) => console.log(event)}

            ///5.
            // onClick={handleClick}
            
            ///6.
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}     {/**onClick={() => console.log(item, index) */}
      </ul>
    </>
  );
}

export default ListGroup;
