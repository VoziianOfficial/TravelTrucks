import s from "./CamperCard.module.css";

import CamperGallery from "../CamperGallery/CamperGallery"
import CamperInfo from "../CamperInfo/CamperInfo";
import Description from "../Description/Description";
import CamperFeatures from "../CamperFeatures/CamperFeatures";

import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";





const CamperCard = ({ camper }) => {
    console.log(camper); // Выводим camper в консоль
    return (
        <li className={s.cardItem}>
            <CamperGallery images={camper.gallery} isPreview={true} />
            <div className={s.contentCard}>
                <CamperInfo camper={camper} detailed={false} />
                <Description description={camper.description} isTruncated={true} />
                <CamperFeatures camper={camper} />
                <ShowMoreButton camperId={camper.id} />
            </div>

        </li>
    )
}

export default CamperCard
