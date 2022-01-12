import React from "react";
import styled from 'styled-components'
import './Loading.scss'

function Loading(){
    return(
        <div className="wrap">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading;