import Button from '@components/Button/Button';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useState } from 'react';
import styles from '../styles.module.scss';

const Review = () => {
  const [rating, setRating] = useState(0); // Lưu trạng thái sao đánh giá
  const [review, setReview] = useState('');

  const handleRating = (index) => {
    setRating(index + 1); // Cập nhật rating khi người dùng click vào sao
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Review:', { rating, review });
    // Thực hiện submit review
  };

  return (
    <div className={styles.container}>
      <h2>REVIEWS</h2>
      <div className={styles.noReviews}>There are no reviews yet.</div>
      <div className={styles.firstReview}>
        Be the first to review “Duis aute irure”
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.rating}>
          <label>Your rating</label>
          <div className={styles.stars}>
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={styles.star}
                onClick={() => handleRating(index)}
              >
                {rating > index ? <FaStar /> : <FaRegStar />}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.reviewInput}>
          <label>Your review</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder='Write your review here...'
          ></textarea>
        </div>

        <Button content={'SUBMIT'} />
      </form>
    </div>
  );
};

export default Review;
