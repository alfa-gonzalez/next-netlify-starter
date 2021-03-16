import Link from 'next/link'

export default function About() {
  return (
    <div className="container">
      <main>
        <p className="description">This is the about page</p>
        <Link href="/">
          <a>About Us</a>
        </Link>
      </main>
    </div>
  );
}
