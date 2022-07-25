import { useState, useEffect } from "react";
import { getapi } from "../helpers";

const Waifu = () => {
    const [url, setUrl] = useState("");
    const [category, setCategory] = useState('smile');

    const updateUrl = async () => {
        const data = await getapi("https://api.waifu.pics/sfw/" + category);
        setUrl(data.url);
    };

    const onKeyPress = ({ key, currentTarget}) => {
        if (key === 'Enter') {
            setCategory(currentTarget.value)
        }

    }
    
    useEffect(() => {
        updateUrl();
    }, [category]);

    return (
        <div className="image">
            <label className="lable">category</label>
            <input className="input mb-3" id="input" defaultValue={category} onKeyDown={onKeyPress} />
            <button className="button mb-3" onClick={updateUrl}>next image </button>
            <img src={url} alt=":D"/>
        </div>
    )
}

export default Waifu