import React, { Component } from 'react'

class TodoAdd extends Component {

    constructor(props) {
			super(props);
			this.handleBtnClick = this.handleBtnClick.bind(this)
			this.handleInputChange = this.handleInputChange.bind(this)
    }

	handleBtnClick() {
		this.props.btnClick()
	}

	handleInputChange(e) {
		this.props.inputChange(e)
	}

	render() {
		return (
			<div>
				<input 
					value={this.props.value} 
					onChange={this.handleInputChange} 
				/>
				<button onClick={this.handleBtnClick}>
					add
				</button>
			</div>
		)
	}
}

export default TodoAdd