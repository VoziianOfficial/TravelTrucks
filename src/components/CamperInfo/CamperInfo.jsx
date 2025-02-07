import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from '../../redux/campers/selectors';
import { toggleFavorite } from '../../redux/campers/campersSlice';
import clsx from "clsx";
import s from './CamperInfo.module.css';

const CamperInfo = ({ camper, isDetailed = false }) => {
    const dispatch = useDispatch(); // Обновляет глобальное состояние приложения
    const favorites = useSelector(selectFavorites); // Получает список избранных элементов из Redux-хранилища
    const isFavorite = favorites.includes(camper.id); // Проверяет, добавлен ли этот camper в избранное

    return (
        <div className={clsx(s.info, isDetailed && s.detailedInfo)}>
            <div className={s.infoTitle}>
                <h2 className={s.title}>{camper.name}</h2>
                {!isDetailed && (
                    <div className={s.wrapper}>
                        <p className={s.price}>€{camper.price.toFixed(2)}</p>
                        <button
                            className={s.button}
                            onClick={() => dispatch(toggleFavorite(camper.id))}
                            aria-label="Add to favorites"
                        >
                            <svg fill={isFavorite ? "#E44848" : "#101828"}>
                                <use xlinkHref="/icons-sprite.svg#icon-favorite"></use>
                            </svg>
                        </button>
                    </div>
                )}
            </div>

            <div className={s.infoDetails}>
                {isDetailed ? (
                    <span className={s.ratingText}>
                        <svg>
                            <use xlinkHref="/icons-sprite.svg#icon-star-yellow"></use>
                        </svg>
                        {camper.rating} ({camper.reviews.length} Reviews)
                    </span>
                ) : (
                    <a href={`/catalog/${camper.id}/reviews`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={s.ratingLink}
                    >
                        <svg>
                            <use xlinkHref="/icons-sprite.svg#icon-star-yellow"></use>
                        </svg>
                        {camper.rating} ({camper.reviews.length} Reviews)
                    </a>
                )}
                <span className={s.location}>
                    <svg>
                        <use xlinkHref="/icons-sprite.svg#icon-map"></use>
                    </svg>
                    {camper.location}
                </span>
            </div>
            {isDetailed && <p className={s.price}>€{camper.price.toFixed(2)}</p>}
        </div>
    );
};

export default CamperInfo;
