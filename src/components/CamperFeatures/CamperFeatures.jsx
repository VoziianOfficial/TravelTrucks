import { useSelector } from "react-redux" //получение данных
import clsx from "clsx" //динамически менять классы

import { details, features } from '../../constants/campers'

import { selectorCampersCurrent } from "../../redux/campers/selectors"

import s from './CamperFeatures.module.css'

const CamperFeatures = ({ camper: propCamper, detailed: propDetailed }) => {
    const reduxCamper = useSelector(selectorCampersCurrent);
    const camper = propCamper || reduxCamper;
    const detailed = propDetailed ?? !propCamper;

    return (
        <div className={clsx(s.features, detailed && s.features_detailed)}>
            <ul className={s.features_list}>
                {features.map(({ key, icon, hasFill }) => {
                    let label = features.find((item) => item.key === key)?.label;

                    if (key === "transmission" && camper.transmission) {
                        label =
                            camper.transmission.charAt(0).toUpperCase() +
                            camper.transmission.slice(1);
                    }
                    if (key === "engine" && camper.engine) {
                        label =
                            camper.engine.charAt(0).toUpperCase() + camper.engine.slice(1);
                    }

                    return (
                        camper[key] && (
                            <li key={key} className={s.features_item}>
                                <svg className={`${s.icon} ${hasFill ? s.fill : ""}`}>
                                    <use xlinkHref={`/icons-sprite.svg#${icon}`} />
                                </svg>
                                {label}
                            </li>
                        )
                    );
                })}
            </ul>

            {detailed && (
                <div className={s.details}>
                    <h3 className={s.details_title}>Vehicle details</h3>
                    <hr className={s.details_line} />
                    <table className={s.details_table}>
                        <tbody className={s.details_tbody}>
                            {details.map(({ key, label }) => {
                                let value = camper[key] ? camper[key].toString() : "N/A";

                                if (key === "length" || key === "width" || key === "height") {
                                    value = value.replace(/([0-9]+)([a-zA-Z]+)/, "$1 $2");
                                } else if (key === "tank") {
                                    value = value.replace(/([0-9]+)([a-zA-Z]+)/, "$1 $2");
                                } else if (key === "consumption") {
                                    value = value.replace(/(\/100)(km)/, "$1 $2");
                                }

                                return (
                                    <tr key={key} className={s.details_tr}>
                                        <td className={s.details_td}>{label}</td>
                                        <td className={s.details_td}>{value}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default CamperFeatures;
