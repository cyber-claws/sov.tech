import React, {
    Component
} from 'react';
import { Link } from "react-router-dom";

export default class Fact extends Component {
    componentWillMount() {
        const { category } = this.props.match.params
        if(!this.props.fact)
            this.props.getRandomFact(category)
    }

    componentWillUnmount() {
        this.props.cleanState()
    }

    handleGetOneMore(event) {
        const { category } = this.props.match.params
        event.preventDefault();
        this.props.getRandomFact(category)
    }

    render() {
        const { fact } = this.props;
        return ( 
            <div className="fact">
                {fact &&
                <div>
                    <img src={fact.icon_url} alt="chuck" />
                    <h1>{fact.value}</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-6"><Link to={`/`}>Return to home</Link></div>
                            <div className="col-6"><a href="#" onClick={e => this.handleGetOneMore(e)}>Get one more</a></div>
                        </div>
                    </div>
                </div>}
            </div>
        );
    }
}
