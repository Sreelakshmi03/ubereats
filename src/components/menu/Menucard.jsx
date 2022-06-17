import React from "react"
import { menuItemsData } from "../../apis/data"
import MenuItems from "./MenuItems"
import "./menu.css"
import CartCountbtn from "../CartCountButton/CartCountbtn"
const Menucard = ({list}) =>
{
    return (
        <main>
            {list.map((item) =>
            (
                <MenuItems key={item.id} item={item}/>
            ))}
            <CartCountbtn/>
        </main>
    )
}
export default Menucard