import Link from 'next/link'

export default function Nav({ title }) {
  return <div className="Nav">
    <div>
      <span>Alex Choi</span>
    </div>
    <div>
      <ul>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/work">
          <li>Work</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  </div>
}
