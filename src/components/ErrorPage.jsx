import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FaceFrownIcon } from "@heroicons/react/24/solid";


const ErrorPage = () => {
    // const [error, status]=useRouteError();
    const { error, status } = useRouteError()
    return (
<div></div>
    );
};

export default ErrorPage;