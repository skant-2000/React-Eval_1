import axios from "axios"
import { useState } from "react"

const getCars = () => {
    const config = {
        url: "http://localhost:3000/cars",
        method: "get"
    };
    return axios(config)
}

const Cars = () => {
    const [cars, getCars]=useState([])
    const [isLoading, setIsLoading]=useState(true)

    useEffect(() => {
        return handleGetCars();
    },[])

    const handleGetCars = () => {
        return getCars()
        .then((res) => {
            setCars(res);
            console.log(res.cars);
            console.log(res)
            setIsLoading(false);
        })
        .catch ((err) => {
            console.log(err);
        })
    }
    if (isLoading) {
        return <div>...loasing</div>
    }

    return(
        <div>
            <div>
                {Cars.map((item)=>{
                    return (
                        <div key = {item.id}>
                            <div>{item.name}</div>
                            <div>{item.type}</div>
                            <div>
                                <img src={item.image} />
                            </div>
                        </div>    
                    )
                })}
            </div>
        </div>
    );
}

export default Cars