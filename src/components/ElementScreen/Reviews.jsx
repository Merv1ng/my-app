import s from "./Reviews.module.css"


const Reviews = (props) => {
  return (
    <div className={s.reviewsElement}>
      {props.message}
    </div>

  )

}

export default Reviews ;

