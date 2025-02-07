import s from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={s.overlay}>
            <span className={s.loader}></span>
        </div>
    );
};

export default Loader;