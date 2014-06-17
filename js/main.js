/** @jsx React.DOM */

var SearchBox = React.createClass({
    getInitialState: function(){
        return {
            value: 'ProJSReact'
        }
    },

    onInputChange: function(e){
        this.setState({value: this.refs.input.value});
        this.props.onChange(e);
    },

    render: function() {
        return new React.DOM.div({},
            new React.DOM.p({}, 'Search box'),
            new React.DOM.input({
                ref: 'input',
                placeholder: this.props.defaultText,
                value: this.state.value,
                onChange: this.onInputChange
            })
        );
    }
});

var globalValue = '';

var render = function(){
    React.renderComponent(
        new React.DOM.div({},
            SearchBox({
                defaultText: 'my text',
                onChange: function(e){
                    globalValue = e.target.value;
                    render();
                }
            }),
            new React.DOM.p({}, globalValue)
        ),
        document.body
    );
};

render();