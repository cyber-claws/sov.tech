import React, {
    Component
} from 'react';
import Category from  'components/Category';

export default class Home extends Component {
    componentWillMount() {
        if(!this.props.categories)
            this.props.getChuckCategories()
    } 

    renderCategories() {
        const { categories } = this.props;
        if(Array.isArray(categories)) {
            return categories.map((val, index) => {
                return <Category key={index} catName={val}/>
            })
        }
        return []
    }

    render() {
        return (
            <div className="container" style={{paddingTop: '100px'}}>
                <div className="row">
                    {this.renderCategories()}
                </div>
            </div>
        );
    }
}
