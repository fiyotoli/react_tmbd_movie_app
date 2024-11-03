// NoPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import yourImage from '../../assets/404.jpg'; // Import your image

const NoPage = () => {
    return (
        <div style={{ backgroundColor: 'white', minHeight: '100vh' }} className="d-flex align-items-center justify-content-center">
            <div className="row pt-3 w-100 align-items-center justify-content-center mt-5">
                <div className="col-md-6 text-center mb-3">
                    <img
                        src={yourImage}
                        alt="Error illustration"
                        className="img-fluid" // Bootstrap class for responsive image
                    />
                </div>
                <div className="col-md-5 mb-3">
                    <h1 className="display-1 text-dark fw-bold">Oops!</h1>
                    <p className="text-muted">
                        It seems that you have encountered an error. Please check the URL or return to the home page.
                    </p>
                    <Link to="/" className="btn btn-danger">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NoPage;
