const Items = ({ title, image, price, body }) => {
    return (
        <div className="card p-2">
            <div className="image">
                <img src={image} alt="" />
                <h1 className="title">{title}</h1>
                <p className="text">{body}</p>
                <div className="price">{price}</div>
            </div>
        </div>
    )
}

export default Items
