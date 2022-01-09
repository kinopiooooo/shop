import React, {useState} from "react"
import {useHistory, useParams } from 'react-router-dom'
import styled from "styled-components";
import './Detail.scss';

let Titlebox = styled.div`
    padding : 20px;
    margin-top:15px
`;
let Boxtitle = styled.h4`
    font-size:25px;
    color : ${ props => props.color }
`;

function Detail(props){

    let { id } = useParams();
    let history = useHistory();

    let targetShoes = props.shoes.find(item => item.id == id);

    return (
        <div className="container">
            <Titlebox>
                <Boxtitle color='red'>Detail</Boxtitle>
            </Titlebox>
            <Titlebox>
                <Boxtitle color='blue'>Detail</Boxtitle>
            </Titlebox>
            <Titlebox className="red">Detail</Titlebox>
            <div className="my-alert">
                <p>재고가 얼마 남지 않았습니다.</p>
            </div>
            <div className="my-alert-red">
                <p>재고가 얼마 남지 않았습니다.</p>
            </div>
            <div className="row">
                <div className="col-md-6">
                <img src={"https://codingapple1.github.io/shop/shoes"+id+".jpg"} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                <h4 className="pt-5">{ targetShoes.title }</h4>
                <p>{ targetShoes.content }</p>
                <p> { targetShoes.price } </p>
                <button className="btn btn-danger mr-1">주문하기</button>&nbsp;
                <button className="btn btn-secondary" onClick={()=>{ history.goBack(); }}>뒤로가기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;