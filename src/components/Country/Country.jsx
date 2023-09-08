/* eslint-disable react/prop-types */


const Country = (props) => {
    // console.log(props.singleCountry);
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={props.singleCountry.flags.png} alt="Shoes" className="rounded-xl w-72 h-56" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{props.singleCountry.name.common }</h2>
                    <p>Population: {props.singleCountry.population}</p>
                    <p>Start Of week: {props.singleCountry.startOfWeek }</p>
                    <p>Region: {props.singleCountry.region}</p>
                    <p>Capital: {props.singleCountry.capital }</p>
                </div>
            </div>
        </div>
    );
};

export default Country;