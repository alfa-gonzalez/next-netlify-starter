import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <main>
        <p className="description">
          Get started by editing [CHANGED 2].. <code>pages/index.js</code>
        </p>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </main>

      
    </div>
  );
}
