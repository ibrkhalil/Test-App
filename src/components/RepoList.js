import React, { Component } from 'react'
import axios from 'axios'
import Repo from './Repo'
class RepoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            itemsArray: []
        }
    }

    componentDidMount() {
        axios.get('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc')
            .then(res => this.setState({ itemsArray: res.data.items }))
    }

    render() {
        const { itemsArray } = this.state
        return (
            <div>
                {/* Map repos to a React List */}
                {itemsArray.map(repo => <Repo key={repo.id} repo={repo} />)}
            </div>
        )
    }
}

export default RepoList
