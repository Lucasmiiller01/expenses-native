
import React, { Component } from 'react'
import { FlatList } from 'react-native'
import Expense from './expense'

// /src/respositories/expenses.js
import expenseRepository from 'repositories/expenses'

export default class Expenses extends Component {
  constructor (props) {
    super(props)
    this.state = {
      expenses: []
    }
  }
  componentDidMount () {
    expenseRepository.list(expenses => this.setState({ expenses }))
  }
  render() {
    return (
      <FlatList
        data={this.state.expenses}
        renderItem={({item}) => <Expense item={item}/>} />
    )
  }
}
