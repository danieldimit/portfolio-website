import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchHeroes } from '../actions/index';

import { Carousel } from 'react-responsive-carousel';// carousel styles
import { backendUrl } from '../config';

class HeroImage extends Component {
    constructor(props) {
        super(props);
        this.renderPics = this.renderPics.bind(this)
    }

    componentDidMount() {
        this.props.fetchHeroes();
    }

    renderPics(data) {


        <Carousel
            showArrows={true}
            useKeyboardArrows
            showStatus={false}
            showThumbs={false}
            dynamicHeight>
            {data.map(function (singleImg) {
                return (
                    <div key={singleImg._id}>
                        <img src={backendUrl + singleImg.loc} />
                    </div>
                );
            })}
        </Carousel>

        if (typeof data !== 'undefined' && data.length > 0) {
            return (

                <Carousel
                    showArrows={false}
                    useKeyboardArrows
                    showStatus={false}
                    showThumbs={false}
                    dynamicHeight
                    autoPlay interval={3000} infiniteLoop>

                    {data.map(function (singleImg) {
                        return (
                            <div key={singleImg._id}>
                                <img src={backendUrl + singleImg.imgURL} />
                                <div className="legend">
                                    <h1>{singleImg.title}</h1>
                                    <br/>
                                    <div>
                                        {singleImg.subtitle}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderPics(this.props.results)}
            </div>
        );
    }
}


function mapStateToProps(state) {
    let results = state.heroes.graphs;
    console.log(results);
    return {
        results
    };
}

export default connect(mapStateToProps, {
    fetchHeroes
})(HeroImage);