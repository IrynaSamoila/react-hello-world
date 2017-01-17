//import React, { Component } from 'react';
import React from 'react';

/*const App = () => <h1>Hello World!</h1>;

-------------------------------------------*/

/*
/!* Set Properties on React Component *!/
class App extends React.Component {
	render(){
		let txt = this.props.txt;
		return <h1>{txt}</h1>
	}
}

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
};

App.defaultProps= {
	txt: "this is default text"
};
--------------------------------------------*/

/*
/!* Manage React Component State with setState *!/
class App extends React.Component {
	constructor() {
		super();
		this.state={
			txt: 'state text'
		}
	}

	/!* this is CUSTOM method!
	so we can change state of object
	(here: text in this.state.txt)*!/
	update(event) {
		this.setState({txt: event.target.value})
	}

	render(){
		return (
			<div>
				<h1>{this.state.txt}</h1>
				<input type="text"
					onChange={this.update.bind(this)}/>
			</div>
		)
	}
}
---------------------------------------------*/

/*
/!* Use React Components as Children for other Components *!/
class App extends React.Component {
	constructor() {
		super();
		this.state={
			txt: 'state text'
		}
	}

	/!* this is CUSTOM method!
	 so we can change state of object
	 (here: text in this.state.txt)*!/
	update(event) {
		this.setState({txt: event.target.value})
	}

	render(){
		return (
			<div>
				<h1>{this.state.txt}</h1>
				<Widget update={this.update.bind(this)}/>
			</div>
		)
	}
}

const Widget = (props) =>
	<input type="text" onChange={props.update}/>;
--------------------------------------------------*/
/*
/!* Access nested data with Reacts props.children *!/
class App extends React.Component {
	render() {
		return <Button>I <Heart /> React</Button>
	}
}

const Button = (props) =>
	<button>{props.children}</button>;

class Heart extends React.Component {
	render() {
		return <span>&hearts;</span>
	}
}
--------------------------------------------------*/

/*
/!* example of custom propType validation in React Components*!/
class App extends React.Component {
	render() {
		return <Title text="Text"/>
	}
}

const Title = (props) =>
	<h1>Title: {props.text}</h1>;

Title.propTypes = {
	text(props, propName, component) {
		if(!(propName in props)) {
			return new Error(`missing ${propName}`)
		}
		if(props[propName].length < 6) {
			return new Error(`${propName} was too short`)
		}
	}
};
--------------------------------------------------*/

/*
/!* Normalize Events with Reacts Synthetic Event System *!/
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentEvent: '---'
		};

		this.update = this.update.bind(this);
	}

	update(event) {
		this.setState({currentEvent: event.type})
	}

	render() {
		return (
			<div>
				<textarea
					onKeyPress={this.update}
					onCopy={this.update}
					onPaste={this.update}
					onCut={this.update}
					onFocus={this.update}
					onBlur={this.update}
					onDoubleClick={this.update}
					onTouchStart={this.update}
					onTouchMove={this.update}
					onTouchEnd={this.update}
					cols="30"
					rows="10" />
				<h1>{this.state.currentEvent}</h1>
			</div>
		);
	}
}
-------------------------------------------------------*/
/*
/!* Use React ref to Get a Reference to Specific Components *!/
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			a: ''
		};
	}

	update() {
		this.setState({
			a: ReactDOM.findDOMNode(this.a).value, //first way
			//a:this.a.value, //second way
			b: this.refs.b.value //third way
		})
	}

	render() {
		return (
			<div>
				<Input
					ref={ component => this.a = component }
					update={this.update.bind(this)}
				/> {this.state.a}

				{/!*second way*!/}
				{/!*<input
					ref={ node => this.a = node }
					type="text"
					onChange={this.update.bind(this)}
				/> {this.state.a}*!/}

				<hr />
				<input
					ref="b"
					type="text"
					onChange={this.update.bind(this)}
				/> {this.state.b}
			</div>
		);
	}
}

class Input extends React.Component {
	render() {
		return <input type="text" onChange={this.props.update}/>
	}
}
------------------------------------------------------*/
/*
/!* Understand the React Component Lifecycle Methods *!/
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			val: 0
		};

		this.update = this.update.bind(this);
	}

	update() {
		this.setState({
			val: this.state.val + 1
		})
	}

	/!* running as first *!/
	componentWillMount() {
		console.log('componentWillMount');
	}

	/!* running as second *!/
	render() {
		console.log('render');
		return <button onClick={this.update}>{this.state.val}</button>
	}

	/!* running as third *!/
	componentDidMount() {
		console.log('componentDidlMount');
	}

	/!* running when component is unmount *!/
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}
}

class Wrapper extends React.Component {
	mount() {
		ReactDOM.render(<App />, document.getElementById('a'))
	}

	unmount() {
		ReactDOM.unmountComponentAtNode(document.getElementById('a'))
	}

	render() {
		return (
			<div>
				<button onClick={this.mount.bind(this)}>Mount</button>
				<button onClick={this.unmount.bind(this)}>Unmount</button>
				<div id="a"></div>
			</div>
		)
	}
}

export default Wrapper; //because Wrapper rendering our App to Wrapper element with id='a'

-------------------------------------------------------*/
/*

/!*Manage React Component State with Lifecycle methods*!/
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			val: 0
		};

		this.update = this.update.bind(this);
	}

	update() {
		this.setState({
			val: this.state.val + 1
		})
	}

	/!* running as first *!/
	componentWillMount() {
		console.log('componentWillMount');
		this.setState({
			m: 2
		});
	}

	/!* running as second *!/
	render() {
		console.log('render');
		return <button onClick={this.update}>
			{this.state.val * this.state.m}
			</button>
	}

	/!* running as third *!/
	componentDidMount() {
		console.log('componentDidlMount');
		this.inc = setInterval(this.update, 500);
	}

	/!* running when component is unmount *!/
	componentWillUnmount() {
		console.log('componentWillUnmount');
		clearInterval(this.inc);
	}
}

class Wrapper extends React.Component {
	mount() {
		ReactDOM.render(<App />, document.getElementById('a'))
	}

	unmount() {
		ReactDOM.unmountComponentAtNode(document.getElementById('a'))
	}

	render() {
		return (
			<div>
				<button onClick={this.mount.bind(this)}>Mount</button>
				<button onClick={this.unmount.bind(this)}>Unmount</button>
				<div id="a"></div>
			</div>
		)
	}
}

export default Wrapper; //because Wrapper rendering our App to Wrapper element with id='a'

-----------------------------------------------*/
/*
/!*Control React Components Updates When New Props Are Received*!/
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			increasing: false
		};
	}

	update() {
		ReactDOM.render(<App val={this.props.val + 1} />,
		document.getElementById('root'))
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			increasing: nextProps.val > this.props.val
		})
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.val % 5 === 0;
	}

	render() {
		console.log(this.state.increasing);
		return <button onClick={this.update.bind(this)}>
			{this.props.val}
		</button>
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(`prevProps: ${prevProps.val}`);
	}
}

App.defaultProps = {
	val: 0
};
---------------------------------------------*/
/*

/!*Use map to Create React Components from Arrays of Data*!/
class App extends React.Component {
	constructor() {
		super();
		this.state= {
			items: []
		}
	}

	componentWillMount() {
		fetch('http://swapi.co/api/people/?format=json')
			.then(response => response.json())
			.then(({results: items}) => this.setState({items}));
	}

	filter(e) {
		this.setState({
			filter: e.target.value
		})
	}

	render() {
		let items = this.state.items;

		if (this.state.filter) {
			items = items.filter(item =>
				item.name.toLowerCase()
					.includes(this.state.filter.toLowerCase()))
		}

		return (
			<div>
				<input type="text"
					onChange={this.filter.bind(this)} />
				{items.map(item =>
					<Person key={item.name} person={item} />)}
			</div>
		)
	}
}

const Person = (props) => <h4>{props.person.name}</h4>;
---------------------------------------------*/
/*

/!*Compose React Component Behavior with Higher Order Components*!/

const HOC = (InnerComponent) => class extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0
		}
	}

	update() {
		this.setState({
			count: this.state.count + 1
		})
	}

	componentWillMount() {
		console.log('will mount');
	}

	render() {
		return (
			<InnerComponent
				{...this.props}
				{...this.state}
				update={this.update.bind(this)}
			/>
		)
	}
};

class App extends React.Component {
	render() {
		return (
			<div>
				<Button>button</Button>
				<hr />
				<LabelHOC>label</LabelHOC>
			</div>
		);
	}
}

const Button = HOC((props) =>
	<button onClick={props.update}>
		{props.children} - {props.count}
	</button>
);

class Label extends React.Component {
	componentWillMount() {
		console.log('label will mount');
	}

	render() {
		return (
			<label onMouseMove={this.props.update}>
				{this.props.children} - {this.props.count}
			</label>
		);
	}
}

const LabelHOC = HOC(Label);
--------------------------------------------*/
/*

/!*Build a JSX Live Compiler as a React Component*!/
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state={
			input: '/!* add your jsx here *!/',
			output: '',
			err: ''
		}
	}

	update(e) {
		let code = e.target.value;

		try {
			this.setState({
				output: window.Babel
					.transform(code, {presets: ['es2015', 'react']})
					.code,
				err: ''
			})
		}
		catch(err) {
			this.setState({
				err: err.message
			})
		}
	}

	render() {
		return (
			<div>
				<header>{this.state.err}</header>
				<div className="container">
					<textarea
						onChange={this.update.bind(this)}
						defaultValue={this.state.input}
					/>
					<pre>
						{this.state.output}
					</pre>
				</div>
			</div>
		)
	}
}
-----------------------------------------------*/
/*

/!* Understand React.Children Utilities *!/
class App extends React.Component {
	render() {
		return (
			<Parent>
				<div className="childA"></div>
				<div className="childB"></div>
			</Parent>
		)
	}
}

class Parent extends React.Component {
	render() {
		//console.log(this.props.children);

		//Get array of children even if there is only one child
		//first way:
		//let items = React.Children
		//	.map(this.props.children, child => child);

		//second way:
		//let items = React.Children.toArray(this.props.children);

		//will return class names of childrens
		//let items = React.Children
		//	.forEach(this.props.children, child => console.log(child.rops.className));

		//will return only one child, if there are more then one child it will return an error
		//let items = React.Children
		//	.only(this.props.children);

		//console.log(items);

		return null;
	}
}
---------------------------------------------*/
/*
/!* Use React.cloneElement to Extend Functionality of Children Components *!/

class App extends React.Component {
	render() {
		return (
			<Buttons>
				<button value="A">A</button>
				<button value="B">B</button>
				<button value="C">C</button>
			</Buttons>
		)
	}
}

class Buttons extends React.Component {
	constructor() {
		super();
		this.state = {
			selected: 'None'
		}
	}

	selectItem(selected) {
		this.setState({selected});
	}

	render() {
		let fn = child =>
			React.cloneElement(child, {
				onClick: this.selectItem.bind(this, child.props.value)
			});

		let items = React.Children.map(this.props.children, fn);

		return (
			<div>
				<h2>You have selected: {this.state.selected}</h2>
				{items}
			</div>
		);
	}
}
-----------------------------------------------*/

/*Write More Reusable React Components with Composable APIs*/
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			red: 0
		};

		this.update = this.update.bind(this);
	}

	update(e) {
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
		});
	}

	render() {
		return (
			<div>
				<NumInput
					ref="red"
					min={0}
					max={255}
					step={1}
					val={+this.state.red}
					type="number"
					label="Red"
					update={this.update} />
			</div>
		)
	}
}

class NumInput extends React.Component {
	render() {
		let label = this.props.label !== '' ?
			<label>{this.props.label} - {this.props.val}</label> : '';

		return (
			<div>
				<input
					ref="inp"
					type={this.props.type}
					min={this.props.min}
					max={this.props.max}
					step={this.props.step}
					defaultValue={this.props.val}
					onChange={this.props.update}
				/>
				{label}
			</div>
		);
	}
}

NumInput.propTypes = {
	min: React.PropTypes.number,
	max: React.PropTypes.number,
	step: React.PropTypes.number,
	val: React.PropTypes.number,
	label: React.PropTypes.string,
	update: React.PropTypes.func.isRequired,
	type: React.PropTypes.oneOf(['number', 'range'])
};

NumInput.defaultProps = {
	min: 0,
	max: 0,
	step: 1,
	val: 0,
	label: '',
	type: 'range'
};

export default App;

/*React.createElement('h1', null, 'Hello World!')*/