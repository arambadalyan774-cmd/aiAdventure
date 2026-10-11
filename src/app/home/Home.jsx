import './home.css'
import Button from './components/button/Button' 

const Home = ({title}) => {
    return (
        <div className="home">
            <h1>{title}</h1>
            <p>Tumo welcome home</p>
            <Button/>
        </div>
    )
}
export default Home