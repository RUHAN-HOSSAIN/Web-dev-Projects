
interface Props{
    children: string;
    // color?: string;
    color?: 'primary' | 'secondary' | 'danger' | 'success';
    onClick: () => void;
}

const Button = ({ children, onClick, color = 'primary'}: Props) => {
  return (
    <>
        <br /><br />
        <button type="button" className={'btn btn-' + color} onClick={onClick}>{children}</button>
        <br /><br />
    </>
  )
}

export default Button