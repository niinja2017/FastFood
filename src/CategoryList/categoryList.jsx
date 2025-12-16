import { useEffect, useState } from 'react'
import './categoryList.css'
import instance from '../axios'
import Loading from '../Loading/Loading'

const CategoryList = () => {
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState()
    useEffect(() => {
        const fetchCategories = async () => {
            let response = await instance.get('categoryList')
            setCategories(response.data)
            setLoading(false)
        }
        fetchCategories()
    }, [])

    const renderContent = () => {
        return (
            loading ? <Loading />
                :
                <ul className='nav'>
                    <li className='nav-item'>
                        <a href="#" className="nav-link">All Fast Food</a>
                    </li>
                    {
                        categories.map(category => (
                            <li key={category.id} className='nav-item'>
                                <a href="#" className="nav-link">{category.name}</a>
                            </li>
                        ))
                    }
                </ul>
        )
    }



    return (
        <>
            <div className='container'>
                <div className="menu-bg">
                    {renderContent()}
                </div>
            </div>
        </>
    )
}

export default CategoryList
