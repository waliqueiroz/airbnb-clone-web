import React from "react";
import { Marker } from "react-map-gl";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Pin } from "./styles";

const intlMonetary = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2
});

const Properties = ({ properties }) =>
    properties.map(property => (
        <Marker
            key={property.id}
            longitude={Number(property.longitude)}
            latitude={Number(property.latitude)}
        >
            <Pin>
                <Link to="">{intlMonetary.format(Number(property.price))}</Link>
            </Pin>
        </Marker>
    ));

Properties.propTypes = {
    properties: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            price: PropTypes.string,
            longitude: PropTypes.string,
            latitude: PropTypes.string
        })
    ).isRequired
};

export default Properties;