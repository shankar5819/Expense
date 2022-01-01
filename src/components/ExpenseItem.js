import '../components/ExpenseItem.css'
import React, { useState } from 'react';

const ExpenseItem = (props) => {
    const month = props.date.toLocaleString('en-us', { month: 'long' });
    const [title, setTitle] = useState(props.title);
    const ClickHandler = () => {
        setTitle("Updated");
        console.log(title);
    };
    return (
        <div className='expense-item'>
            <div>{month}</div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={ClickHandler}>Change Title</button>
        </div>
    );
}

export default ExpenseItem;