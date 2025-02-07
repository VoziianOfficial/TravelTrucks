// src/components/CatalogList/CatalogList.jsx
import { fetchCampersThunk } from "../../redux/campers/operations";
import { selectCampers, selectTotalCampers, selectIsLoading } from "../../redux/campers/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CamperCard from "../CamperCard/CamperCard";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import s from './CatalogList.module.css'


const CatalogList = () => {

    const dispatch = useDispatch();
    const campers = useSelector(selectCampers);
    const totalCampers = useSelector(selectTotalCampers);
    const isLoading = useSelector(selectIsLoading);

    const loadMore = () => {
        if (isLoading || campers.length >= totalCampers) return;
        const currentPage = Math.ceil(campers.length / 4) + 1;
        dispatch(fetchCampersThunk({ page: currentPage, limit: 4 }));
    };

    useEffect(() => {
        dispatch(fetchCampersThunk({ page: 1, limit: 4 }));
    }, [dispatch]);

    return (
        <section className={s.camperSection}>
            <ul className={s.camperList}>
                {campers.map((camper) => (
                    <CamperCard key={camper.id} camper={camper} />
                ))}

            </ul>
            {!isLoading && campers.length < totalCampers && (
                <LoadMoreBtn onClick={loadMore} />
            )}

        </section>
    )
}

export default CatalogList

