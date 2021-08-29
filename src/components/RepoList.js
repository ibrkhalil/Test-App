import React, { Component } from 'react'
import axios from 'axios'
import Repo from './Repo'
import styles from './repoList.module.css'
import InfiniteScroll from 'react-infinite-scroll-component'
class RepoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            itemsArray: [],
            pageNo: 2
        }
    }

    componentDidMount() {
        axios.get('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc')
            .then(res => this.setState({ itemsArray: res.data.items }))
    }

    //Get Newer items on scroll
    fetchNewData = async () => {
        const items = [...this.state.itemsArray]
        await axios.get(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${this.state.pageNo}`)
            .then(res => this.setState({ itemsArray: [...items, ...res.data.items], pageNo: this.state.pageNo + 1 }))

    }

    render() {
        const { itemsArray } = this.state
        return (
            <div className={styles.list}>
                {/* Map repos to a React List */}
                <InfiniteScroll
                    dataLength={itemsArray.length}
                    next={this.fetchNewData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>No More Items to Show</b>
                        </p>
                    }
                >
                    {itemsArray.map(repo => <Repo key={repo.id} repo={repo} />)}
                </InfiniteScroll>
            </div>
        )
    }
}

export default RepoList
