import './category-item-component.scss';

const CategoryItem = ({category}) => {
    const {imageUrl, title} = category ;
    return (
        <div className = "category-container large">
            <div className = 'background-image' style={{
                backgroundImage :  `URL(${imageUrl})`
            }}>
            </div>
            <div className = 'category-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem ;