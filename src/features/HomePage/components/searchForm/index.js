import React, {Component} from 'react'

class SeacrhForm extends Component {

    state ={ 
        searchValue:'',
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            searchValue: event.target.value
        })
    }

    handleClick = ()=> {
        console.log(this.state.searchValue);
        this.props.handleSearch(this.state.searchValue);
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.searchValue} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Seacrh</button>
            </div>
        )
    }
}

export default SeacrhForm;