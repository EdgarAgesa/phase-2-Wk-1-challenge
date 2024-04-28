import React from "react";

const TransactionForm = ({ addTransaction }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const date = event.target[0].value; 
        const description = event.target[1].value; 
        const category = event.target[2].value;
        const amount = event.target[3].value; 
