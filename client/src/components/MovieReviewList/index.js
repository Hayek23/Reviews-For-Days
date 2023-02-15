// import React from 'react';
// import { Link } from 'react-router-dom';

// const MovieReviewList = ({
//   reviews,
//   title,
//   showTitle = true,
//   showUsername = true,
// }) => {
//   if (!movieReview.length) {
//     return <h3>No Review Yet</h3>;
//   }

//   return (
//     <div>
//       {showTitle && <h3>{title}</h3>}
//       {reviews &&
//         reviews.map((movieReview) => (
//           <div key={movieReview._id} className="card mb-3">
//             <h4 className="card-header bg-primary text-light p-2 m-0">
//               {showUsername ? (
//                 <Link
//                   className="text-light"
//                   to={`/profiles/${movieReview.reviewAuthor}`}
//                 >
//                   {movieReview.reviewAuthor} <br />
//                   <span style={{ fontSize: '1rem' }}>
//                     had this thought on {movieReview.createdAt}
//                   </span>
//                 </Link>
//               ) : (
//                 <>
//                   <span style={{ fontSize: '1rem' }}>
//                     You had this thought on {movieReview.createdAt}
//                   </span>
//                 </>
//               )}
//             </h4>
//             <div className="card-body bg-light p-2">
//               <p>{movieReview.reviewText}</p>
//             </div>
//             <Link
//               className="btn btn-primary btn-block btn-squared"
//               to={`/movieReview/${movieReview._id}`}
//             >
//               Join the discussion on this review.
//             </Link>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default MovieReviewList;
