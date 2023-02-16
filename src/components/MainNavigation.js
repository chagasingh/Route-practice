import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const MainNavigation=()=>{
    return <Fragment>
        <header>
            <nav>
                <ul>
                    <li><NavLink to='/quotes'>AllQuotes</NavLink></li>
                    <li><NavLink to='/new-quotes'>Add A Quote</NavLink></li>
                </ul>
            </nav>
        </header>
    </Fragment>
}
export default MainNavigation;