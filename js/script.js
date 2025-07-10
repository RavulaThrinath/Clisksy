// Load header.html into the page
fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    // Scroll behavior
    const navbar = document.getElementById("navbar");
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");
    const submenuParent = document.querySelector(".has-submenu");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });

    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });

    submenuParent.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        submenuParent.classList.toggle("active");
      }
    });
  });

// footer
// footer
// footer
document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
});

// blog content
// blog content
// blog content
// blog content
const blogData = [
  {
    img: "./assets/Blog/Blog-1.webp",
    title: "Cutting-Edge Trends <br> in Digital Marketing",
  },
  {
    img: "./assets/Blog/Blog-2.webp",
    title: "Beyond Human: <br> AI Meets Marketing",
  },
  {
    img: "./assets/Blog/Blog-3.webp",
    title: "The AI-Powered <br> Marketing Chronicles",
  },
];

const blogContainer = document.getElementById("blogContainer");

blogData.forEach((blog) => {
  const blogItem = document.createElement("div");
  blogItem.classList.add("blog-item");

  blogItem.innerHTML = `
      <div class="blog-content-wrapper-text">
        <div class="blog-content-wrapper-text-img">
          <img src="${blog.img}" alt="">
        </div>
        <div class="blog-inner-content">
          <h3>${blog.title}</h3>
                      <div class="blog-button-wrapper">
              <button class="blog-sm-button">
                <div class="blog-sm-button-box">
                  <span class="blog-sm-button-elem">
                    <svg viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 
                               6.96-.048L.2 12.56l1.488 1.488 
                               9.432-9.432-.048 6.912 2.304.024z"></path>
                    </svg>
                  </span>
                  <span class="blog-sm-button-elem">
                    <svg viewBox="0 0 14 15">
                      <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 
                               6.96-.048L.2 12.56l1.488 1.488 
                               9.432-9.432-.048 6.912 2.304.024z"></path>
                    </svg>
                  </span>
                </div>
              </button>
            </div>
        </div>
      </div>
    `;

  blogContainer.appendChild(blogItem);
});

// client logos
// client logos
// client logos

const track = document.getElementById("carousel-track");
const logos = Array.from(track.children);

// Clone logos for seamless loop
logos.forEach((logo) => {
  const clone = logo.cloneNode(true);
  track.appendChild(clone);
});

// Swipe functionality (basic touch handler)
let startX = 0;
const container = document.getElementById("logo-carousel");

container.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  track.style.animationPlayState = "paused";
});

container.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  const delta = endX - startX;

  if (Math.abs(delta) > 30) {
    // Optional: You could add logic to scroll logos manually here
  }

  track.style.animationPlayState = "running";
});

// Services

const items = document.querySelectorAll(".service-item");
let activeIndex = 1; // Initially active: second item (index starts at 0)
let originalActive = items[activeIndex];

// Set initial active class
originalActive.classList.add("service-item-link-active");

items.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    // Remove from all
    items.forEach((i) => i.classList.remove("service-item-link-active"));
    // Add to current
    item.classList.add("service-item-link-active");
  });

  item.addEventListener("mouseleave", () => {
    // Remove from current hover
    item.classList.remove("service-item-link-active");
    // Restore original active
    originalActive.classList.add("service-item-link-active");
  });
});

// Testimonials
// Testimonials
// Testimonials
// Testimonials

const wrapper = document.getElementById("testimonialWrapper");
const slider = document.getElementById("testimonialSlider");

// Clone cards for seamless loop
const cloneNodes = slider.innerHTML;
slider.innerHTML += cloneNodes; // duplicate cards
let scrollSpeed = 0.5; // pixels/frame
let scrollX = 0;
let paused = false;

function loop() {
  if (!paused) {
    scrollX += scrollSpeed;
    if (scrollX >= slider.scrollWidth / 2) scrollX = 0; // reset loop
    slider.style.transform = `translateX(-${scrollX}px)`;
  }
  requestAnimationFrame(loop);
}

wrapper.addEventListener("mouseenter", () => (paused = true));
wrapper.addEventListener("mouseleave", () => (paused = false));

// Start loop after DOM is ready
window.addEventListener("load", loop);

// faqs
// faqs
// faqs


