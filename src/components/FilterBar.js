import React, { useState } from 'react';
import '../css/FilterBar.css';
import { Col } from 'reactstrap';
import { SortProperty, SortOrder } from './CustomSelect';


const FilterBar = () => {
    const [filterByDate, setFilterByDate] = useState(false);
    const [filterByProperty, setFilterByProperty] = useState('status');
    const [filterByOrder, setFilterByOrder] = useState('INCRE');

    const convertToNumber = stringData => {
        if (stringData === 'pending' || stringData === 'low') stringData = 0;
        if (stringData === 'progress' || stringData === 'medium') stringData = 1;
        if (stringData === 'done' || stringData === 'high') stringData = 2;
    }

    const filter = taskList => {
        const convertList = taskList.map(task => ({
            ...task,
            createdDate: new Date (task.createdDate).getTime(),
            status: convertToNumber(task.status),
            priority: convertToNumber(task.priority)
        }));
        if (!filterByDate) {
            if (filterByProperty === 'status')
                return convertList.sort((a, b) => a.status - b.status)
            
            if (filterByProperty === 'priority')
                return convertList.sort((a, b) => a.priority - b.priority);

        } else {
            if (filterByProperty === 'status')
                return convertList.sort((a, b) => a.status - b.status)
                .sort((a, b) => a.createdDate - b.createdDate);
            
            if (filterByProperty === 'priority')
                return convertList.sort((a, b) => a.priority - b.priority)
                .sort((a, b) => a.createdDate - b.createdDate);
            
        }
    }

    return (
        <Col className="filterBar" xl="11" lg="11" md="12" sm="12" xs="12" >
            <Col className="filterBar-left" xl="4" lg="4" md="4" sm="12" xs="12">
                <Col className="sortByStatus">
                    <label htmlFor="sort-status">Sort by: </label>
                    <SortProperty property={filterByProperty}
                    onChangeFilterProperty={setFilterByProperty}/>
                </Col>
                <Col className="sortByPriority">
                    <label htmlFor="sort-priority">Direction:</label>
                    <SortOrder order={filterByOrder}
                        onChangeFilterOder={setFilterByOrder}
                    />
                </Col>
            </Col>
            <Col className="filterBar-right" xl="8" lg="8" md="8" sm="12" xs="12">
                <div className="checkFilter">
                    <label htmlFor="filter">Filter: </label>
                    <input type="checkbox" onChange = {() => setFilterByDate(!filterByDate)}/>
                </div>
                <div className="fromDate">
                    <label htmlFor="fromDate">From: </label>
                    <input type="date" />
                </div>
                <div className="toDate">
                    <label htmlFor="toDate">To: </label>
                    <input type="date"/>
                </div>
                <button>Apply</button>
            </Col>
            
        </Col>
    );
};

export default FilterBar;