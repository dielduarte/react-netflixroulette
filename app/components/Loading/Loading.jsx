import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import CircularProgress from 'material-ui/lib/circular-progress';

const customContentStyle = {
    width: '150px',
    maxWidth: '150px',
    textAlign: 'center'
};

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }

    componentDidMount(){
        var component = this;

        component.setState({
            open: this.props.open
        });
    }

    render() {

        return (
            <div>
                <Dialog
                    title="Loading..."
                    modal={true}
                    open={this.state.open}
                    contentStyle={customContentStyle}
                >
                    <CircularProgress />
                </Dialog>
            </div>
        );
    }
}


export default Loading;
