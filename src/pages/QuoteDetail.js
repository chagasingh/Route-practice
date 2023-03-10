import { Fragment } from "react";
import { useParams,Route } from "react-router-dom";
import Comment from '../components/Comment'

const QuoteDetail=()=>{
    const params=useParams()
    return (
      <Fragment>
        <h1>Quotes Detail Page</h1>
        <p>{params.quoteId}</p>
        <Route path={`/quotes/${params.quoteId}/comments`}>
            <Comment/>
        </Route>
      </Fragment>
    );
    }
    export default QuoteDetail;