import Items from "../Item/items"

const FastFoodList = ({ fastFoodItems }) => {
    return (
        <div className="row g-3">
            {
                fastFoodItems.map(fastfood => (
                    <div className="col-4 p-2" key={fastfood.id}>
                        <Items {...fastfood} />
                    </div>
                ))
            }
        </div>
    )
}

export default FastFoodList
