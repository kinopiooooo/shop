import React, {useEffect, useState} from "react"
import {useHistory, useParams } from 'react-router-dom'
import styled from "styled-components";
import './Detail.scss';
import $ from 'jquery';
import { Nav } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

let Titlebox = styled.div`
    padding : 20px;
    margin-top:15px
`;
let Boxtitle = styled.h4`
    font-size:25px;
    color : ${ props => props.color }
`;




function Detail(props){

    

    let [alertstr, setalertstr] = useState(true);
    let [inputdata, setinputdata] =useState('');
    let { id } = useParams();
    let history = useHistory();

    let targetShoes = props.shoes.find(item => item.id == id);

    let [tabStr, settabStr] = useState(0);
    let [tabAniSwich, settabAniSwich] = useState(false);

    useEffect(()=>{
        let alerttimer = setTimeout(()=>{
            setalertstr(false);
        }, 2000)
        console.log('맞어?')
        return ()=>{
            clearTimeout(alerttimer)
            //페이지 이동시 버그의 우려로인해 페이지 이동전 타이머 삭제
        }
    }, [alertstr]);

    return (
        <div className="container">
            <Titlebox>
                <Boxtitle color='red'>Detail</Boxtitle>
            </Titlebox>
            {/* <Titlebox>
                <Boxtitle color='blue'>Detail</Boxtitle>
            </Titlebox>
            <Titlebox className="red">Detail</Titlebox> */}
            {inputdata}
            <input onChange={(e)=>{setinputdata(e.target.value)}}/>
            {
                alertstr === true 
                ? (<div className="my-alert"><p>재고가 얼마 남지 않았습니다.</p></div>)
                : null
            }
            <div className="row">
                <div className="col-md-6">
                <img src={"https://codingapple1.github.io/shop/shoes"+(Number(id)+1)+".jpg"} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                <h4 className="pt-5">{ targetShoes.title }</h4>
                <p>{ targetShoes.content }</p>
                <p> { targetShoes.price } </p>

                <Inventories inventories={props.inventories} id={id}> </Inventories>
                <button className="btn btn-danger mr-1" onClick={ ()=>{ 
                    var array = [...props.inventories]
                    array[id] = (array[id])-1;
                    props.setinventories(array)
                 } }>주문하기</button>&nbsp;
                <button className="btn btn-secondary" onClick={()=>{ history.goBack(); }}>뒤로가기</button> 
                </div>
            </div>

            
            <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={ ()=>{ settabStr(0);settabAniSwich(false) } }>Option 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={ ()=>{ settabStr(1);settabAniSwich(false) } }>Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={ ()=>{ settabStr(2);settabAniSwich(false) } }>Option 3</Nav.Link>
                </Nav.Item>
            </Nav>
            <CSSTransition in={ tabAniSwich } classNames="wow" timeout={500}>
                <Tabcontent tabStr={ tabStr } settabAniSwich={settabAniSwich}></Tabcontent>
            </CSSTransition>
        </div> 
    )
}
function Tabcontent(props){
    useEffect(()=>{
        props.settabAniSwich(true)
    })
    if(props.tabStr==0){
        return (<div>1</div>)
    } else if(props.tabStr==1){
        return (<div>2</div>)
    } else if(props.tabStr==2){
        return (<div>3</div>)
    }
}
function Inventories(props){
    return(
        <p>재고 : { props.inventories[props.id] }</p>
    )
}

export default Detail;