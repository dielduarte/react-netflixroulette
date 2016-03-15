import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardActions from 'material-ui/lib/card/card-actions';
import querystring from 'querystring';
import Cards from '../Cards/Cards.jsx';
import Loading from '../Loading/Loading.jsx';
import DefaultMessage from '../Messages/DefaultMessage.jsx';

class Form extends React.Component {
    getApi(e){
        e.preventDefault();

        let data = {
          title: this.refs.title.getValue(),
          director: this.refs.director.getValue(),
          actor: this.refs.actor.getValue()
        };

        let serializeParams = querystring.stringify(data);

        ReactDOM.render(<Loading open={true}/>, document.getElementById('cards_render'));

        fetch('http://netflixroulette.net/api/api.php?' + serializeParams).then(function(response) {
            return response.json();
        }).then(function(data) {

            if(data.errorcode)
                return ReactDOM.render(<DefaultMessage title="Error" description="didn't find anything, try again." />, document.getElementById('cards_render'));


            return ReactDOM.render(<Cards cardsData={data}/>, document.getElementById('cards_render'));

        });
    }
    render() {
        return <Card>

            <CardTitle title="Filters" subtitle="fill out the filters below to find your movies and series on netflix"/>
            <form action="" class="">
                <div>
                    <TextField
                        hintText="you know the movie or serie title ?"
                        floatingLabelText="Movie or serie title"
                        ref="title"
                    /><br/>
                    <TextField
                        hintText="you know the name of director?"
                        floatingLabelText="you know the name of director?"
                        ref="director"
                    /><br/>
                    <TextField
                        hintText="you know the name of actor?"
                        floatingLabelText="you know the name of actor?"
                        ref="actor"
                    />
                </div>
            </form>

            <CardActions>
                <FlatButton label="Filter" secondary={true} onClick={this.getApi.bind(this)}/>
            </CardActions>
        </Card>;
    }
}

export default Form;
