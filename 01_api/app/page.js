'use client';

export default function Home() {
  const handleClick = async() => {
    const data={
      name:"test",
      age:10
    }
    await fetch('/api/create',{
      method:"POST",
      body:JSON.stringify(data)
    })

  }
  return (
    <button onClick={()=>{handleClick()}}>Click</button>
  );
}
