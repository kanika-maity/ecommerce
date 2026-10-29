import React from "react";
import "./Item.css"

import Popular from "../Popular/Popular";


const Item = (props) => {
    return(
        <div className="Item">
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    {props.new_price}
                </div>
                <div className="item-prices">
                <div className="item-price-old">
                    {props.new_old}
                    <Popular/>
            </div>
        </div>
</div>
</div>
    )
}

export default Item