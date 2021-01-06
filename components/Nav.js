import Link from 'next/link'

export default function Nav({ title }) {
  return <div className="Nav">
    <div>
      <ul>
        <Link href="/"><a>alexchoiweb</a></Link>

      </ul>
    </div>
    <div>
      <ul>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/work">
          <a>Work</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </ul>
    </div>
  </div>
}
