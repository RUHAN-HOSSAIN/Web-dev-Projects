import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const showAlert = ({ children, onClose } : Props) => {
  return (
    <>
      <br /><br />
      <div className="alert alert-primary alert-dismissible">{children}</div>
      <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </>
  )
}

export default showAlert;