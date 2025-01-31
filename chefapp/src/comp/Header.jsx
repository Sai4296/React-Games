import Chef from "../image/Chef.jpg"

export default function Header() {
    return (
        <header>
            <img src={Chef} alt="Not rendered"/>
            <h1>Chef App</h1>
        </header>
    )
}