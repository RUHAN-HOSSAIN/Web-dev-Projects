
const Person = (props) => {
  return (
    <>
      <h1 className="text-2xl font-bold">Name: {props.name}</h1>
      <h2 className="text-xl font-semibold">Last Name: {props.lastName}</h2>
      <h2 className="text-lg pb-5">Age: {props.age}</h2>
    </>
  )
}

const C1personPractice = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col bg-blue-200">
      <Person name={'John'} lastName={'Doe'} age={'30'} />
      <Person name={'Bob'} lastName={'Smith'} age={'22'} />
      <Person name={'Alice'} lastName={'Johnson'} age={'25'} />
      <Person name={'Jane'} lastName={'Williams'} age={'35'} />
      <Person name={'Charlie'} lastName={'Brown'} age={'40'} />
    </div>
  )
}

export default C1personPractice;