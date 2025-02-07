import s from './Description.module.css'

const Description = ({ description, isTruncated = false }) => {
    return (
        <div>
            <p className={isTruncated ? s.truncated : s.full}>{description}</p>

        </div>
    )
}

export default Description
