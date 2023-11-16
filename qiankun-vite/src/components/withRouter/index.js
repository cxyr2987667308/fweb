import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

export default function withRouter(Child) {
  return () => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return <Child Params={params} navigate={navigate} location={location} />;
  }
}