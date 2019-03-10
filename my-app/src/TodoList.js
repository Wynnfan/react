import React, { Component, Fragment } from 'react'
import TodoAdd from './TodoAdd'
import TodoItem from './TodoItem'

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			list: [],
			inputValue: ''
		}
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
	}

	handleBtnClick() {
		this.setState({
			list: [...this.state.list, this.state.inputValue],
			inputValue: ''
		})
	}

	handleInputChange(e) {
		this.setState({
			inputValue: e.target.value
		})
	}

	// handleItemClick(index) {
	// 	const list = [...this.state.list]
	// 	list.splice(index, 1)
	// 	this.setState({
	// 		list
	// 	})
	// }

	handleDelete(index) {
		const list = [...this.state.list]
		list.splice(index, 1)
		this.setState({
			list
		})
	}

	getTodoItems() {
		return (
			this.state.list.map((item, index) => {		
				return (
					<TodoItem 
						delete={this.handleDelete} 
						key={index} 
						content={item} 
						index={index} 
					/>
				)
			}) 
		)
	}

	render() {
		return (
			<Fragment>
				<TodoAdd 
					value={this.state.inputValue}
					inputChange={this.handleInputChange} 
					btnClick={this.handleBtnClick} 
				/>
				<ul>
					{this.getTodoItems()}
				</ul>
			</Fragment>
		)
	}
}

export default TodoList;