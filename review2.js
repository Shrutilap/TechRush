
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const reviewText = document.getElementById('review').value;
    
    const reviewContainer = document.createElement('div');
    reviewContainer.classList.add('review');
    
    const reviewTitle = document.createElement('h3');
    reviewTitle.textContent = name;
    reviewContainer.appendChild(reviewTitle);
    
    const reviewRating = document.createElement('div');
    reviewRating.classList.add('rating');
    reviewRating.textContent = 'Rating: ' + '★'.repeat(rating);
    reviewContainer.appendChild(reviewRating);
    
    const reviewContent = document.createElement('p');
    reviewContent.textContent = reviewText;
    reviewContainer.appendChild(reviewContent);
    
    document.getElementById('reviewsContainer').appendChild(reviewContainer);
    
    document.getElementById('reviewForm').reset();
});
