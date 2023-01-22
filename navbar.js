import './styles.css';
export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">Buena Idea</a>
        <ul>
            <li>
                <a href="/secretos">Secretos</a>
                </li>
                <li>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
}