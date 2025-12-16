import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import Header from './Header/header'
import CategoryList from './CategoryList/categoryList'
import { useEffect, useState } from 'react'
import instance from './axios'
import Loading from './Loading/Loading'

const App = () => {
    const [loading, setLoading] = useState(false)
    const [fastFoodItems, setFastFood] = useState([])
    const fetchData = async () => {
        setLoading(true)
        let response = await instance.get('List')
        setFastFood(response.data)
        setLoading(false)
    }
    useEffect(() => {
        fetchData()
    }, [])

    const renderContent = () => {
        return (
            loading ? <Loading />
                :
                <div className='container mt-5'>
                    <div className='row'>
                        {
                            fastFoodItems.map(fastFood => (
                                <div key={fastFood.id} className='col-4'>
                                    <h3>{fastFood.title}</h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
        )
    }

    return (
        <>
            <Header />
            <CategoryList />
            {renderContent()}
        </>
    )
}

export default App
