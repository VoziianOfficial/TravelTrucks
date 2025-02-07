import { useState } from "react";
import { Lightbox } from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";

import s from './CamperGallery.module.css';

const CamperGallery = ({ images, isPreview = false }) => {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) {
        return null;
    }

    const slides = images.map((img) => ({
        src: img.original,
        thumbnail: img.thumb,
    }));

    return (
        <div className={s.CamperGallery}>
            {isPreview ? (
                <img
                    src={slides[0]?.thumbnail || '/default-image.jpg'}
                    alt="Camper preview"
                    className={s.previewImage}
                />
            ) : (
                <div className={s.gallery}>
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide.thumbnail}
                            alt={`Camper image ${index + 1}`}
                            className={s.image}
                            onClick={() => {
                                setCurrentIndex(index);
                                setOpen(true);
                            }}
                        />
                    ))}
                </div>
            )}

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={currentIndex}
                slides={slides}
            />
        </div>
    );
};

export default CamperGallery;
