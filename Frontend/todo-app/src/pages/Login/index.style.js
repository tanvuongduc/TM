import styled from "styled-components";

const StyleList = styled.div`
*{
	box-sizing: border-box;
}

.wrapper{
	display: flex;
	/* background: url('../../background.png'); */
	/* background-size: 100% 100%;
	background-position: center; */
	flex-direction: column;
	justify-content: center;
	animation: auto;
	max-width: 100%;
	height: 100vh;
}

.row{
	height: 310px;
	float: left;
}

.col-left{
	color: white;
	height: 310px;
	border-right: 2px solid;

}

.col-left p{
	font-family: "Arial Narrow", Arial, sans-serif;
	color: white;
	font-weight: lighter;
	font-size: 3.5rem;
	padding: 20px 300px 150px 150px;
}

.col-right {
	height: 310px;

}

.col-right form{
	padding-top: 40px;
	padding-bottom: 55px;
	padding-left: 360px;
	flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;

}

.col-right form input{
	color: black;
	padding-left: 20px;
	height: 40px;
	width: 265px;
	border-radius: 3px;
	border: none;
}

.form-btn{
	width: 265px;
	padding-top: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.btnLogin{
	height: 35px;
	width: 100%;
	background-color: #2b38be;
	color: white;
	border: none;
	border-radius: 3px;
	text-align: center;
}

::placeholder {
    color: black;
    opacity: 1;
}
`;
export default StyleList;


