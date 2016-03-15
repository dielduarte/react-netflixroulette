import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardMedia from 'material-ui/lib/card/card-media';
import CardHeader from 'material-ui/lib/card/card-header';

class Cards extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        if(this.props.cardsData.length > 1) {
            var cards = this.props.cardsData.map(function (card) {
                return (<Card className="filter__result">
                    <CardHeader
                        title={card.show_title}
                        subtitle={"director: " + card.director}
                        avatar={card.poster}
                    />
                    <CardMedia>
                        <img src={card.poster}/>
                    </CardMedia>
                </Card>)
            });
        } else {
            var cards = <Card className="filter__result">
                <CardHeader
                    title={this.props.cardsData.show_title}
                    subtitle={"director: " + this.props.cardsData.director}
                    avatar={this.props.cardsData.poster}
                />
                <CardMedia>
                    <img src={this.props.cardsData.poster}/>
                </CardMedia>
            </Card>;
        }

        return <div>{cards}</div>;
    }
}

export default Cards;
