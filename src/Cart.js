import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";


function Cart(props){
    return(
        <div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{ props.state[0].name }</td>
                        <td>{  }</td>
                        <td>{  }</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

function storeToProps(state){
    return {
        state : state 
    }
}

export default connect(storeToProps)(Cart);