
import ShowingAlert from "./components/C7_showingAlert";

import Button from "./components/C6_button";

import Alert from "./components/C5_Alert";

import ListGroup4 from "./components/4ListGroup";
import ListGroup3 from "./components/3ListGroup";
import ListGroup2 from "./components/2ListGroup";
import Message from "./1Message";
import { useState } from "react";

function App() {
  let items = ["Dhaka", "Rajshahi", "Pabna", "Santhia", "Dhulauri"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      <Message />
      <ListGroup2 />

      <ListGroup3 items={items} heading="City ListGroup3" />

      <ListGroup4 items={items} heading="City ListGroup4" onSelectItem={handleSelectItem}/>


      {/* 5. <Alert text={"Ruhan"} /> */}
      <Alert>
        Hello <span>World</span>
      </Alert>

      {/* 6. */}
      <Button onClick={() => console.log("Clicked")}>
        My Button
      </Button>
      
      {/* 6_2. */}
      <Button color="danger" onClick={() => console.log("Clicked")}>
        My Button
      </Button>


      {/* 7. */}
      {alertVisible && <ShowingAlert onClose={() => setAlertVisible(false)}>show</ShowingAlert>}
      
      <Button color="success" onClick={() => setAlertVisible(true)}>Click here</Button>
    </>
  );
}

export default App;