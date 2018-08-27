import React, {Component} from 'react'
import ButtonComponen from './components/Button'
import {connect} from 'react-redux'
import  {loadRandom} from './redux/actions'

const Value = (props) => {
    
    return (
        props.item !== null ?
        <div>
            <img src={props.item.images.fixed_height.webp} />
        </div>
        :
        null
    )
}

class RandomPage extends Component {

    handleSubmit = () => {
        this.props.loadRandom();
    }

    render() {
        const {loading,item,error} = this.props
        return (
            <section>
                <h1>Random Page</h1>
                <ButtonComponen loadRandom={this.handleSubmit}/>
                <Value item={item}/>
                {loading ? <p>Loading...</p> : null}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading:state.random.loading,
        item:state.random.item,
        error:state.random.error
    };
  }; 

export default connect(mapStateToProps, {loadRandom} )(RandomPage);