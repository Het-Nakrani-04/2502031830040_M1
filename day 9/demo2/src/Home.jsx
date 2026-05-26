import { useNavigate }from "react-router-dom"

export default function Home(){
    
    const Navigate = useNavigate();

    const goToAbout = () => {

        Navigate('/about')

    }

    return (
        <div>
            <h2>Wlcome to Home Page</h2>
            <button onClick={goToAbout}>Go to About</button>
        </div>
    )
}