import React from 'react'
import { Todo, Goal } from '../types';

type ListProps = {
    items: Array<Todo | Goal>
    remove: (item: any) => void
    toggle?: (item: any) => void
}

export default class List extends React.Component<ListProps> {
    render() {
        return (
        <ul>
            {this.props.items.map(item => {
                return (
                <li key={item.id}>
                    <span 
                        onClick={() => {
                            if(this.props.toggle) {
                                this.props.toggle(item)
                            }
                        }}
                        style={
                            {textDecoration: item.complete ? 'line-through': ''}}  
                    >
                        { item.name }
                    </span>
                    <button onClick={() => this.props.remove(item)}>X</button>
                </li>
                )
            })}
        </ul>)
    }
}