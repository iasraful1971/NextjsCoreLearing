import { useRouter } from "next/router";
import React from 'react';
function ReviewId() {
    const router = useRouter();
    const {reviewId , productId} = router.query;

  return (
    <h1>Review Id page {reviewId} for product { productId}</h1>
  )
}

export default ReviewId