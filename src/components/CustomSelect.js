import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



export const StatusSelect = ({onChangeStatus, status}) => {
  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: 0,
      color: 'black'
    },
    select: {
      color: 'black',
      border: '1px solid #c7d8e6',
      borderRadius: '4px',
      paddingLeft: '5px'
    },
  }));

  return (
    <FormControl className={useStyles().formControl}>
      <Select
        value={status}
        onChange={e => onChangeStatus(e.target.value)}
        className={useStyles().select}
        >
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="process">Progress</MenuItem>
          <MenuItem value="done">Done</MenuItem>
        </Select>
      </FormControl>
      
  )
}

export const PrioritySelect = ({onChangePriority, priority}) => {
  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: 0,
      color: 'black'
    },
    select: {
      color: 'black',
      border: '1px solid #c7d8e6',
      borderRadius: '4px',
      paddingLeft: '5px'
    },
  }));

  return (
    <FormControl className={useStyles().formControl}>
      <Select
        value={priority}
        onChange={e => onChangePriority(e.target.value)}
        className={useStyles().select}
        >
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>
      </FormControl>
      
  )
}


export const SortStatus = () => {
  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: 0,
      color: 'black'
    },
    select: {
      color: 'black',
      border: '1px solid #c7d8e6',
      borderRadius: '4px',
      paddingLeft: '5px'
    },
  }));
  const [sort, setStatus] = useState(1);
  const handleChange = e => {
    setStatus(e.target.value);
  };

  return (
    <FormControl className={useStyles().formControl}>
      <Select
        value={sort}
        onChange={handleChange}
        className={useStyles().select}
  
        >
          <MenuItem value={1}>Status</MenuItem>
          <MenuItem value={2}>Priority</MenuItem>
        </Select>
      </FormControl>
      
  )
}

export const SortPriority = () => {
  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: 0,
      color: 'black'
    },
    select: {
      color: 'black',
      border: '1px solid #c7d8e6',
      borderRadius: '4px',
      paddingLeft: '5px'
    },
  }));
  const [sort, setStatus] = useState(1);
  const handleChange = e => {
    setStatus(e.target.value);
  };

  return (
    <FormControl className={useStyles().formControl}>
      <Select
        value={sort}
        onChange={handleChange}
        className={useStyles().select}
        
        >
          <MenuItem value={1}>DESC</MenuItem>
          <MenuItem value={2}>INCRE</MenuItem>
        </Select>
      </FormControl>
      
  )
}
