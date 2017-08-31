import React, { Component } from 'react';

class TitleList extends Component{

    constructor(props){
        super(props);
        this.state={
            data: [],
            mounted: false
        };
    }

    componentDidMount(){
        if(this.props.url !== ''){
            this.loadContent();
            this.setState({ mounted: true});
        }
    }

    loadContent(){
        var requestUrl = 'https://api.themoviedb.org/3/' + this.props.url + '&api_key=' + 'af43b44e676c68ef2bc426078345b150';
        fetch(requestUrl).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({ data: data});
        }).catch((err) => {
            console.log('There is an error');
        })
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.url !== this.props.url && nextProps.url !== ''){
            this.setState({ mounted: true, url: nextProps.url}, () => {
                this.loadContent();
            })
        }
    }

    render() {
        return(
            <div>
                TitleList
            </div>
        );
    }
}

export default TitleList;