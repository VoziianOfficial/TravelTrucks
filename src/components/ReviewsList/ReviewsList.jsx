import { useEffect, useState } from "react";
import s from "./ReviewsList.module.css";

const ReviewsList = ({ camperId }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Запрос на сервер для получения отзывов по ID кемпера
        fetch(`/api/reviews/${camperId}`)
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((error) => console.error("Ошибка загрузки отзывов:", error));
    }, [camperId]);

    return (
        <div className={s.reviews}>
            <h4>Отзывы:</h4>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map((review) => (
                        <li key={review.id} className={s.reviewItem}>
                            <strong>{review.author}:</strong> {review.text} ⭐{review.rating}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Отзывов пока нет.</p>
            )}
        </div>
    );
};

export default ReviewsList;
