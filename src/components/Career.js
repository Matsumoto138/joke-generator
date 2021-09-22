import React,{useState, useEffect} from 'react'


function Career() {

    const[joke1, setJoke1] = useState(null)
    const[joke2, setJoke2] = useState(null)
    const[joke3, setJoke3] = useState(null)
    const[joke4, setJoke4] = useState(null)
    const[joke5, setJoke5] = useState(null)
    
    
    const getCareerJokes = () => {

            fetch('https://api.chucknorris.io/jokes/random?category=career')
            .then(res => res.json())
            .then(data => {
                setJoke1(data.value)
            }) 

            fetch('https://api.chucknorris.io/jokes/random?category=career')
            .then(res => res.json())
            .then(data => {
                setJoke2(data.value)
            })

            fetch('https://api.chucknorris.io/jokes/random?category=career')
            .then(res => res.json())
            .then(data => {
                setJoke3(data.value)
            })

            fetch('https://api.chucknorris.io/jokes/random?category=career')
            .then(res => res.json())
            .then(data => {
                setJoke4(data.value)
            })

            fetch('https://api.chucknorris.io/jokes/random?category=career')
            .then(res => res.json())
            .then(data => {
                setJoke5(data.value)
            })
}

    useEffect(() => {
        getCareerJokes()
    },[])

    return (
        <div className="Career-comp">
            <h2 className="title">Career Jokes</h2>
            <div className="card">
                <h5>Joke 1</h5>
                <div className="underline"></div>
                <p>{joke1}</p>
            </div>
            <div className="card">
                <h5 className="card-title">Joke 2</h5>
                <div className="underline"></div>
                <p>{joke2}</p>
            </div>
            <div className="card">
                <h5 className="card-title">Joke 3</h5>
                <div className="underline"></div>
                <p>{joke3}</p>
            </div>
            <div className="card">
                <h5 className="card-title">Joke 4</h5>
                <div className="underline"></div>
                <p>{joke4}</p>
            </div>
            <div className="card">
                <h5 className="card-title">Joke 5</h5>
                <div className="underline"></div>
                <p>{joke5}</p>
            </div>
            
        </div>
    )

}

export default Career
