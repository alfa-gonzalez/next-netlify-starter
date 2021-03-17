import Image from 'next/image'

export default function Header({ title }) {
  return (
    <>
      <header className="pt-3 pb-3">
        <div className="container">
          <h1 className="title">{title}</h1>
        </div>
      </header>
      
    </>
  );
}
