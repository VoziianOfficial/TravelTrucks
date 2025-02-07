//src/pages/Catalog/CatalogPage.jsx
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchCampersThunk } from '../../redux/campers/operations'
import { selectCampersError, selectIsLoading } from '../../redux/campers/selectors'

import Loader from "../../components/Loader/Loader.jsx";
import CatalogList from "../../components/CatalogList/CatalogList"
import CatalogRoute from "../../components/CatalogRoute/CatalogRoute"

import s from './CatalogPage.module.css'
// import SearchBar from "../../components/SearchBar/SearchBar";


const CatalogPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectCampersError);

    useEffect(() => {
        dispatch(fetchCampersThunk({ page: 1, limit: 4 }));
    }, [dispatch]);

    return (
        <main className={s.camperPage}>
            <CatalogRoute />
            {isLoading && <Loader />}
            {error ? (
                <div className={s.error_message}>⚠️ {error}</div>
            ) : (
                <CatalogList />
            )}


        </main>
    )
}

export default CatalogPage
