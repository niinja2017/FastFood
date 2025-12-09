import { useEffect, useState } from 'react'
import './categoryList.css'
import instance from '../axios'

const CategoryList = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchCategories = async () => {
            let response = await instance.get('categoryList')

            setCategories(response.data)
        }
        fetchCategories()
    }, [])



    return (
        <>
            <div className='container'>
                <ul className='nav'>
                    <li className='nav-item'>
                        <a href="#" className="nav-link">همه موارد</a>
                    </li>
                    {
                            categories.map(category => (
                                <li key={category.id} className='nav-item'>
                                    <a href="#" className="nav-link">{category.name}</a>
                                </li>
                            ))
                    }
                </ul>
            </div>
        </>
    )
}

export default CategoryList
