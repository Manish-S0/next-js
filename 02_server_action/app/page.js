import Image from "next/image";

export default function Home() {
  const handleSubmit=async (e)=>{
    'use server';
    console.log(e.get("email"),e.get("password"))
  }
  return (
    <div className="w-1/4 m-5">
      <form action={handleSubmit} className="flex flex-col gap-4 text-gray-600">
      <input type="text" name="email" placeholder="email"/>
      <input type="text" name="password" placeholder="password" />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}
