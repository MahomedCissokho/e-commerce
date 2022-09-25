import CategoryItem from '../category-item/category-item-component'
import './categories.styles.scss'


const DirectoryComponent = ({categories}) => {
    
    return (
        <div className = 'categories-container large'>
            {
                categories.map((category) => {
                    return (
                        < CategoryItem 
                        key = {category.id}  
                        category = {category}
                        />
                    )
            })}
        </div>  
    )
}

export default DirectoryComponent;