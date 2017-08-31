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

        let titles = '';
        if (this.state.data.results){
            titles = this.state.data.results.map((title, i) => {
                if(i < 5){
                    let name = '';
                    let backDrop = 'http://image.tmdb.org/t/p/original' + title.backdrop_path;
                    if (!title.name){
                        name = title.original_title;
                    }else{
                        name = title.name;
                    }


                    return (
                        <TitleListItem 
                            key={title.id}
                            title={name}
                            score={title.vote_average}
                            overview={title.overview}
                            backdrop={backDrop}
                        />
                    );
                }else{
                    return (<div key={title.id}></div>);
                }
            });
        }



        return(
            <div className="TitleList" data-loaded={this.state.mounted} ref="titlecategory">
                <div className="Title">
                    <h1>{this.props.title}</h1>
                    <div className="titles-wrapper">
                        {titles}
                    </div>
                </div>
            </div>
        );
    }
}

export default TitleList;