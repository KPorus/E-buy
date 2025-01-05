

const Rating = ({ value }: { value: number }) => {
    // Ensure the rating is between 0 and 5
    const normalizedRating = Math.min(5, Math.max(0, value));
  
    // Calculate the number of filled and empty stars
    const filledStars = Math.floor(normalizedRating);
    const hasHalfStar = normalizedRating % 1 !== 0;
  
    // Create an array of stars
    const stars = Array.from({ length: 5 }, (_, index) => {
      if (index < filledStars) {
        return (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
          >
            <path
              d="M6.5 0L4.49083 4.07133L0 4.72045L3.25 7.89097L2.48166 12.3641L6.5 10.2534L10.5183 12.3641L9.75 7.89097L13 4.72486L8.50917 4.07133L6.5 0Z"
              fill="#de4644"
            />
          </svg>
        ); // Filled star
      }
      if (index === filledStars && hasHalfStar) {
        return (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            stroke="#de4644"
          >
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="50%"
                  style={{ stopColor: "#de4644", stopOpacity: 1 }}
                />
                <stop
                  offset="50%"
                  style={{ stopColor: "#FFFFFF", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            
            <path
              d="M6.5 0L4.49083 4.07133L0 4.72045L3.25 7.89097L2.48166 12.3641L6.5 10.2534L10.5183 12.3641L9.75 7.89097L13 4.72486L8.50917 4.07133L6.5 0Z"
              // fill="#FFFFFF"
              // fill="#FF9900"
              fill="url(#grad)"
            />
          </svg>
        ); // Half-filled star
      }
      return (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          stroke="#de4644"
        >
          <path
            d="M6.5 0L4.49083 4.07133L0 4.72045L3.25 7.89097L2.48166 12.3641L6.5 10.2534L10.5183 12.3641L9.75 7.89097L13 4.72486L8.50917 4.07133L6.5 0Z"
            fill="#fffff"
          />
        </svg>
      ); // Empty star
    });
  
    return <div id="ts--desktop-rating" className="flex gap-[2px]">{stars}</div>;
  };
  
  export default Rating;
  