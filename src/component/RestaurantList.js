import React, { Component } from 'react';
import RestaurantCard from './RestaurantCard'
import { getRestaurants } from '../util/RestaurantAPI'
import InfiniteScroll from "react-infinite-scroll-component";

export default class Listing extends Component {    
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            hasMore: true,
            restaurants: [],
            pageToken: '',
        }
    }

    componentDidMount() {
        getRestaurants(this.state.pageToken).then(data => {
            this.setState({
                restaurants: data.results,
                pageToken: data.next,
            })
        })
    }

    fetchMoreData = () => {
        var nextPage = this.state.currentPage + 1
        setTimeout(() => {
            getRestaurants(this.state.pageToken).then(data => {
                var restaurants = data.results
                var hasMore = true
                var pageToken = data.pageToken
                if (pageToken == null) {
                    hasMore = false
                }
                this.setState({
                    restaurants: this.state.restaurants.concat(restaurants),
                    currentPage: nextPage,
                    hasMore: hasMore,
                    pageToken: pageToken,
                })
            });
        }, 1500);
    };


    render() {
        let restaurants = this.state.restaurants.map(each => {
            return (
                <div key={each.placeId}>
                    <RestaurantCard
                        name={each.name} />
                </div>
            )
        })

        return (
            <div className="container">
                <InfiniteScroll
                    dataLength={this.state.restaurants.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.hasMore}
                    loader={<h4>Loading...</h4>}>
                    {this.state.restaurants.map((each) => (
                        <div key={each.placeId}>
                            <RestaurantCard
                                name={each.name} />
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        )
    }
}