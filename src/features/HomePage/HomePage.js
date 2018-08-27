import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadTrending} from './redux/actions'
import {loadSearch} from './redux/actions'
import SearchForm from './components/searchForm/'

class HomePage extends Component {

    componentDidMount() {
        this.props.loadTrending();
    }

    handleSearch = (value) => {
        this.props.loadSearch(value);
    }

    render() {
        const {items, loading, error} = this.props;
        let newsTemplate
        console.log(items);
        if (items) {
            newsTemplate = <div className='aa'>
                    {items.map(item => (
                    <p key={item.id} >
                        <img src={item.images.fixed_height.webp} />
                    </p>
                    ))}
            </div>
        } else {
            newsTemplate = null
        }
        return (
            <section>
                <h1>Home Page</h1>
                <SearchForm handleSearch={this.handleSearch}/>
                {loading ? <p>loading</p> : null}
                {newsTemplate}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    const {items, loading, error} = state.home
    return {
        items: items,
        loading: loading,
        error: error,
    }
}

export default connect(mapStateToProps,{loadTrending,loadSearch}) (HomePage);