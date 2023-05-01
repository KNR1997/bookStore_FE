class ReviewRequestModel {
    rating: number;
    bookId: number;
    reviewDescription?: string;
    sentimentScore: number;

    constructor(rating: number, bookId: number, reviewDescription: string, sentimentScore: number) {
        this.rating = rating;
        this.bookId = bookId;
        this.reviewDescription = reviewDescription;
        this.sentimentScore = sentimentScore;
    }
}

export default ReviewRequestModel;