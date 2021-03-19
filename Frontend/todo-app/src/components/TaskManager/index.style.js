import styled from "styled-components";

const StyleList = styled.div`
  .list-item {
    margin-bottom: 5px;
    border-radius: 3px;
    height: 40px;
    vertical-align: baseline;
    cursor: pointer;
  }
  .list-item-medium {
    background-color: #fff;
  }
  .list-item-low {
    background-color: #cce8ff;
  }
  .list-item-high {
    background-color: #ffc6c6;
  }

  .list-item:hover {
    background-color: #ececec;
  }
  .input-task {
    border: 2px solid #c7d8e6;
  }
  .btn-action {
    background-color: #64a7dc;
    border: 0px; 
    margin-right: 15px;
    width: 80px;
  }
  .btn-action-danger {
    background-color: #ff7575;
  }
`;
export default StyleList;
