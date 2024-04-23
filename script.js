// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Select all social sharing buttons
    var shareButtons = document.querySelectorAll(".share-buttons button");

    // Add event listeners to each social sharing button
    shareButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Get the URL of the current page
            var url = window.location.href;

            // Get the title of the current page
            var title = document.title;

            // Check which social media platform was clicked and open the share URL accordingly
            if (button.classList.contains("share-facebook")) {
                window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url), "_blank");
            } else if (button.classList.contains("share-twitter")) {
                window.open("https://twitter.com/intent/tweet?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(title), "_blank");
            } else if (button.classList.contains("share-instagram")) {
                // Replace 'YOUR_INSTAGRAM_URL' with your Instagram URL
                window.open("YOUR_INSTAGRAM_URL", "_blank");
            }
        });
    });
});


//for search 

// script.js

document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the search query
    var searchQuery = document.getElementById("searchInput").value.trim();

    // Redirect to search results page with query parameter
    window.location.href = "search-results.html?q=" + encodeURIComponent(searchQuery);
});
// script.js

document.addEventListener("DOMContentLoaded", function() {
    var reviewForm = document.getElementById("reviewForm");
    var reviewsContainer = document.getElementById("reviewsContainer");

    reviewForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var reviewText = document.getElementById("reviewText").value;
        var rating = document.getElementById("rating").value;

        var reviewElement = document.createElement("div");
        reviewElement.classList.add("review");

        var reviewTextElement = document.createElement("p");
        reviewTextElement.classList.add("review-text");
        reviewTextElement.textContent = reviewText;
        reviewElement.appendChild(reviewTextElement);

        var ratingElement = document.createElement("p");
        ratingElement.classList.add("review-rating");
        ratingElement.textContent = "Rating: " + rating;
        reviewElement.appendChild(ratingElement);

        reviewsContainer.appendChild(reviewElement);

        document.getElementById("reviewText").value = "";
        document.getElementById("rating").value = "";
    });
});
// script.js

document.addEventListener("DOMContentLoaded", function() {
    


    // Sample data for news and articles (you can replace it with your own data)
    var newsData = [
        { title: "New Album Release", content: "Check out the latest album from your favorite artist!" },
        { title: "Music Festival Announcement", content: "Exciting news! A new music festival is coming to town." },
        { title: "Interview with a Musician", content: "Read our exclusive interview with a talented musician." }
    ];

    var newsContainer = document.getElementById("newsContainer");

    // Display news and articles
    newsData.forEach(function(item) {
        var newsItem = document.createElement("div");
        newsItem.classList.add("news-item");

        var newsTitle = document.createElement("h3");
        newsTitle.classList.add("news-title");
        newsTitle.textContent = item.title;

        var newsContent = document.createElement("p");
        newsContent.classList.add("news-content");
        newsContent.textContent = item.content;

        newsItem.appendChild(newsTitle);
        newsItem.appendChild(newsContent);

        newsContainer.appendChild(newsItem);
    });
});


// for side bar

document.addEventListener("DOMContentLoaded", function() {
    // Select sidebar and button to toggle its visibility
    var sidebar = document.getElementById("sidebar");
    var toggleButton = document.getElementById("toggleButton");

    // Add event listener to the toggle button
    toggleButton.addEventListener("click", function() {
        // Toggle the 'active' class on the sidebar to show/hide it
        sidebar.classList.toggle("active");
    });
});



// You can fetch blog posts from an API or hardcode them here for demonstration.

// Sample hardcoded data
const blogPostsData = [
    {
        title: "Exploring the History of Rock Music",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit arcu in justo tincidunt, sit amet gravida est tincidunt."
    },
    {
        title: "10 Must-Listen Jazz Albums",
        content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
        title: "The Influence of Hip-Hop on Modern Music",
        content: "Fusce vitae risus ut elit semper fringilla. Praesent id feugiat leo. Sed non tristique ex, at dictum orci."
    }
];

document.addEventListener("DOMContentLoaded", function() {
    const blogPostsContainer = document.getElementById("blogPosts");
    blogPostsData.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("blog-post");
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;
        blogPostsContainer.appendChild(postElement);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendarContainer');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid' ],
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [
        {
          title: 'Concert: Artist X',
          start: '2024-04-10',
          end: '2024-04-12'
        },
        {
          title: 'Music Festival',
          start: '2024-04-15',
          end: '2024-04-17'
        },
        {
          title: 'Album Release: Artist Y',
          start: '2024-04-25',
          end: '2024-04-26'
        }
      ]
    });

    calendar.render();
});

// Sample data for special offers
var specialOffers = [
    {
      title: "50% Off on All Albums",
      description: "Limited time offer. Grab your favorite albums at half the price!",
      discount: "50%"
    },
    {
      title: "Buy 1 Get 1 Free on Concert Tickets",
      description: "Special promotion for our loyal customers. Buy one ticket and get another for free!",
      discount: "Buy 1 Get 1 Free"
    },
    {
      title: "10% Discount on Premium Memberships",
      description: "Upgrade to a premium membership and enjoy ad-free music with exclusive benefits.",
      discount: "10%"
    }
  ];
  
  // Function to display special offers
  function displaySpecialOffers() {
    var offerList = document.getElementById('offerList');
    specialOffers.forEach(function(offer) {
      var offerDiv = document.createElement('div');
      offerDiv.classList.add('offer');
      offerDiv.innerHTML = `
        <h3>${offer.title}</h3>
        <p>${offer.description}</p>
        <p class="discount">Discount: ${offer.discount}</p>
      `;
      offerList.appendChild(offerDiv);
    });
  }
  
  // Call the function to display special offers
  displaySpecialOffers();
  