"use strict";
function userReview(stars) {
    if (!stars)
        return `User doesn't has any stars`;
    return `thanks for the ${stars} stars!`;
}
console.log(userReview(3));
console.log(userReview(false));
