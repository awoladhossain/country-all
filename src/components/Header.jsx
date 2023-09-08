/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const Header = (props) => {
    console.log(props.people);
    return (
        <div>
            <p key={props.people.id}>{props.people.name}</p>
            <p>{props.people.gender}</p>
        </div>
    );
};

export default Header;