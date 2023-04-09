import ReviewModel from "../../models/ReviewModel";
import { StarsReview } from "./StarsReview";

export const Review: React.FC<{ review: ReviewModel }> = (props) => {

    console.log("props: ",props.review.date);

    const day = props.review.date;
    const rate = props.review.rating;

    const date = new Date(day ? day : '');
    const rating = rate ? rate : 0;

    const longMonth = date.toLocaleString('en-us', { month: 'long' });
    const dateDay = date.getDate();
    const dateYear = date.getFullYear();

    const dateRender = longMonth + ' ' + dateDay + ', ' + dateYear;

    return (
        <div>
            <div className='col-sm-8 col-md-8'>
                <h5>{props.review.userEmail}</h5>
                <div className='row'>
                    <div className='col'>
                        {dateRender}
                    </div>
                    <div className='col'>
                        <StarsReview rating={rating} size={16} />
                    </div>
                </div>
                <div className='mt-2'>
                    <p>
                        {props.review.reviewDescription}
                    </p>
                </div>
            </div>
            <hr />
        </div>
    );
}