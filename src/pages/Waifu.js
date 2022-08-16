import { Link } from "react-router-dom";
import Waifu from "../components/Waifu";
const Waifu = () => {
    return (
        <>
            <nav>
                <Link to="waifu">Home</Link>
            </nav>
            <main>
                <Waifu />
            </main>
        </>
    )
}

export default Waifu