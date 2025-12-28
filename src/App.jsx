import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import Header from './Header/header'
import CategoryList from './CategoryList/categoryList'
import { useEffect, useState } from 'react'
import instance from './axios'
import Loading from './Loading/Loading'
import FastFoodList from './FastFoodList/FastFoodList'

const App = () => {
    const [loading, setLoading] = useState(false)
    const [fastFoodItems, setFastFood] = useState([])
    const [filterItems, setFilterItems] = useState([])

    const fetchData = async () => {
        setLoading(true)
        let response = await instance.get('List')
        setFastFood(response.data)
        setFilterItems(response.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const filterItem = (name) => {
        if (name === 'all') {
            setFilterItems(fastFoodItems)
        } else {
            const result = fastFoodItems.filter(item => item.title === name)
            setFilterItems(result)
        }
    }

    const renderContent = () => {
        return (
            loading ? <Loading /> : <FastFoodList fastFoodItems={filterItems} />
        )
    }

    return (
        <>
            <Header />
            <CategoryList filterItem={filterItem} />
            <div className="container mt-5">
                {
                    renderContent()
                }
            </div>
        </>
    )
}

export default App
