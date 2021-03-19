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


export const SortProperty = ({property, onChangeFilterProperty}) => {
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
  const handleChange = e => {
    onChangeFilterProperty(e.target.value);
  };

  return (
    <FormControl className={useStyles().formControl}>
      <Select
        value={property}
        onChange={handleChange}
        className={useStyles().select}
  
        >
          <MenuItem value="status">Status</MenuItem>
          <MenuItem value="priority">Priority</MenuItem>
        </Select>
      </FormControl>
      
  )
}

export const SortOrder = ({order, onChangeFilterOder}) => {
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
  const handleChange = e => {
    onChangeFilterOder(e.target.value);
  };

  return (
    <FormControl className={useStyles().formControl}>
      <Select
        value={order}
        onChange={handleChange}
        className={useStyles().select}
        
        >
          <MenuItem value="DESC">DESC</MenuItem>
          <MenuItem value="INCRE">INCRE</MenuItem>
        </Select>
      </FormControl>
      
  )
}
