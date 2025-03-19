
// ========== INTRO SECTION
let intro = document.querySelector('.intro');
let logoSpan = document.querySelectorAll('.logo');
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });
        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            })
        }, 2000);

    });
    // Hide intro and show main content after 3 seconds
    setTimeout(() => {
        intro.style.top = '-100vh';
    }, 2300);
})
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');

    // Hide intro and show main content after 3 seconds
    setTimeout(() => {
        intro.style.display = 'none';
        mainContent.classList.remove('hidden'); // Show the main content
    }, 2800);

})
// ========== SMOOTH SCROLLING

document.addEventListener("DOMContentLoaded", function () {
    const navbarHeight = document.querySelector("nav").offsetHeight; // Adjust based on your navbar height
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default jump
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const targetPosition = targetSection.offsetTop - navbarHeight - 20; // Offset to avoid overlap
                window.scrollTo({ top: targetPosition, behavior: "smooth" });
            }
        });
    });
});
// ==================================== NAV BAR ===============================================

// ========== NAV BAR HIGHLIGHT 
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    function changeActiveNav() {
        let scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100; // Adjust offset if needed
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === section.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", changeActiveNav);
});

// ========== MOUSE MOVE IFFECT
(function () {
    const links = document.querySelectorAll('.nav-bar li');
    const cursor = document.querySelector('.cursor');

    const animateIt = function (e) {
        const span = this.querySelector('span');
        const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,
            move = 25,
            xMove = (x / width) * (move * 2) - move,
            yMove = (y / height) * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;
        if (e.type === 'mouseleave') span.style.transform = '';
    };

    const editCursor = (e) => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
    };

    links.forEach(link => {
        link.addEventListener('mousemove', animateIt);
        link.addEventListener('mouseleave', animateIt);
    });

    window.addEventListener('mousemove', editCursor);
})();

// ==================================== HOME SECTION ===============================================

// ========== TEXT ANIMATION

document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".l-text");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            } else {
                entry.target.classList.remove("animate"); // Resets animation when out of view
            }
        });
    }, { threshold: 0.6 });

    projects.forEach(project => observer.observe(project));
});

document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".rightsection");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            } else {
                entry.target.classList.remove("animate"); // Resets animation when out of view
            }
        });
    }, { threshold: 0.6 });

    projects.forEach(project => observer.observe(project));
});
// ==================================== ABOUT SECTION ===============================================

// ========== ZOOM IN AND ZOOM OUT

document.addEventListener("DOMContentLoaded", () => {
    const zoomSection = document.querySelector(".about-section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    zoomSection.classList.add("visible"); // Zoom in
                } else {
                    zoomSection.classList.remove("visible"); // Zoom out
                }
            });
        },
        { threshold: 0.3 } // Trigger when 50% of the section is visible
    );

    observer.observe(zoomSection);
});
// ========== ABOUT MORE TEXT ANIMATION

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about-more");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add("animate");
            } else {
                aboutSection.classList.remove("animate"); // Remove class when out of view
            }
        });
    }, { threshold: 0.3 });

    observer.observe(document.querySelector("#more-info"));
});



// ==================================== EXPERIENCE SECTION ===============================================

// ========== EXPERIENCE SECTION ZOOM IN AND ZOOM OUT

document.addEventListener("DOMContentLoaded", () => {
    const zoomSection = document.querySelector(".secondsection");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    zoomSection.classList.add("visible"); // Zoom in
                } else {
                    zoomSection.classList.remove("visible"); // Zoom out
                }
            });
        },
        { threshold: 0.2 } // Trigger when 50% of the section is visible
    );

    observer.observe(zoomSection);
});

// ========== EXPERIENCE SECTION TEXT ANIMATION

document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".vertical-title");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            } else {
                entry.target.classList.remove("animate"); // Resets animation when out of view
            }
        });
    }, { threshold: 0.3 });

    projects.forEach(project => observer.observe(project));
});

// ========== EXPERIENCE SECTION VERTICAL LINE ANIMATION

document.addEventListener("DOMContentLoaded", function () {
    const verticalLines = document.querySelectorAll(".vertical");
    const experienceSection = document.getElementById("experience");

    function checkScroll() {
        const sectionTop = experienceSection.getBoundingClientRect().top;
        const sectionBottom = experienceSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight && sectionBottom > 0) {
            // Animate vertical lines to full height
            verticalLines.forEach(line => {
                line.style.height = "clamp(100px, 14vw, 150px)"; // Adjust height as needed
            });
        } else {
            // Hide vertical lines when out of view
            verticalLines.forEach(line => {
                line.style.height = "0";
            });
        }
    }
    window.addEventListener("scroll", checkScroll);
});




// ==================================== SKILL SECTION ===============================================

// ========== SKILL SECTION ZOOM IN & ZOOM OUT

document.addEventListener("DOMContentLoaded", () => {
    const zoomSection = document.querySelector(".skills");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    zoomSection.classList.add("visible"); // Zoom in
                } else {
                    zoomSection.classList.remove("visible"); // Zoom out
                }
            });
        },
        { threshold: 0.1 } // Trigger when 50% of the section is visible
    );

    observer.observe(zoomSection);
});

// ========== SKILL SECTION SHAPE ANIMATION

document.addEventListener("DOMContentLoaded", function () {
    const skillsSection = document.querySelector(".tag");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillsSection.classList.add("show");
            } else {
                skillsSection.classList.remove("show"); // Hide again when scrolling up
            }
        });
    }, { threshold: 0.7 }); // Trigger when 30% of the section is visible

    observer.observe(skillsSection);
});


// ========== SKILL SECTION TEXT ANIAMTION

document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".add-skills");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            } else {
                entry.target.classList.remove("animate"); // Resets animation when out of view
            }
        });
    }, { threshold: 0.4 });

    projects.forEach(project => observer.observe(project));
});



// ==================================== PROJECT SECTION ===============================================

// ========== PROJECT SECTION ZOOM IN & ZOOM OUT

document.addEventListener("DOMContentLoaded", () => {
    const zoomSection = document.querySelector(".projects");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    zoomSection.classList.add("visible"); // Zoom in
                } else {
                    zoomSection.classList.remove("visible"); // Zoom out
                }
            });
        },
        { threshold: 0.2 } // Trigger when 50% of the section is visible
    );

    observer.observe(zoomSection);
});
/*
// ========== PROJECT SECTION HORIZONTAL LINE ANIMATION
 
document.addEventListener("DOMContentLoaded", function () {
    const horizontalLines = document.querySelectorAll(".hori");
 
    function checkScroll() {
        horizontalLines.forEach((line, index) => {
            const lineTop = line.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
 
            if (lineTop < windowHeight * 0.8) {  // Triggers when 80% in view
                setTimeout(() => {
                    line.style.width = "clamp(130px, 15vw, 160px)"; // Adjust width as needed
                }, index * 300); // Delay increases for each line
            } else {
                line.style.width = "0"; // Reset when out of view
            }
        });
    }
 
    window.addEventListener("scroll", checkScroll);
});
*/
/*document.querySelectorAll('.projects a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.closest('.projects').querySelector('.info-box').style.height = '241px';
    });
    link.addEventListener('mouseout', () => {
        link.closest('.projects').querySelector('.info-box').style.height = '';
    });
});*/
// ========== PROJECT SECTION TEXT ANIMATION

document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            } else {
                entry.target.classList.remove("animate"); // Resets animation when out of view
            }
        });
    }, { threshold: 0.3 });

    projects.forEach(project => observer.observe(project));
});


// ========== PROJECT SECTION TEXT SHAPE RIGHT ANIMATION

document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".info-box");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            } else {
                entry.target.classList.remove("animate"); // Resets animation when out of view
            }
        });
    }, { threshold: 0.3 });

    projects.forEach(project => observer.observe(project));
});

// ========== PROJECT SECTION FOR CLICKING EVENT & ANIMATION

document.addEventListener("DOMContentLoaded", function () {
    const projectLinks = document.querySelectorAll(".project ul li a");

    projectLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            const projectInfo = this.getAttribute("data-info");
            const projectImages = this.getAttribute("data-images").split(",");

            const categoryBox = this.closest(".catego");
            const infoBox = categoryBox.querySelector(".info-box .info-text");
            const infoImage = categoryBox.querySelector(".info-box img");

            // Clear any existing timeouts to prevent conflicts
            clearTimeout(categoryBox.infoShowTimeout);
            clearTimeout(categoryBox.imageShowTimeout);
            clearTimeout(categoryBox.infoHideTimeout);

            // Hide image immediately
            infoImage.classList.add("img-hide");
            infoImage.classList.remove("img-show");

            // Schedule info display after 500ms
            categoryBox.infoShowTimeout = setTimeout(() => {
                infoBox.innerHTML = projectInfo;
                infoBox.classList.add("fade-in");
                infoBox.style.display = "block";
            });
        });

        link.addEventListener("mouseout", function () {
            const categoryBox = this.closest(".catego");
            const infoBox = categoryBox.querySelector(".info-box .info-text");
            const infoImage = categoryBox.querySelector(".info-box img");

            // Clear existing timeouts
            clearTimeout(categoryBox.infoShowTimeout);
            clearTimeout(categoryBox.imageShowTimeout);
            clearTimeout(categoryBox.imageShowTimeout);

            // Start fade-out animation
            infoBox.classList.remove("fade-in");
            infoBox.classList.add("fade-out");

            // Schedule info cleanup and image display
            categoryBox.infoHideTimeout = setTimeout(() => {
                infoBox.innerHTML = "";
                infoBox.style.display = "none";
                infoBox.classList.remove("fade-out");

                // Show image after info is hidden
                categoryBox.imageShowTimeout = setTimeout(() => {
                    infoImage.classList.remove("img-hide");
                    infoImage.classList.add("img-show");
                }, 10);
            }, 100);
        });
    });

    // Image clicking to change images in a loop (for each category)
    document.querySelectorAll(".catego .info-box img").forEach(infoImage => {
        infoImage.addEventListener("click", function () {
            let imageList = this.getAttribute("data-images").split(",");
            let currentIndex = parseInt(this.getAttribute("data-index"));

            currentIndex = (currentIndex + 1) % imageList.length;

            // Apply fade transition
            this.classList.add("fade");
            setTimeout(() => {
                this.src = imageList[currentIndex].trim();
                this.classList.remove("fade");
            }); // add number dealy image clicking

            this.setAttribute("data-index", currentIndex);
        });
    });
});

// ========== PROJECT SECTION AUTOMATIC ADJUSTMANTS

document.addEventListener("DOMContentLoaded", function () {
    // Delay the execution by 3 seconds (3000 milliseconds)
    setTimeout(function () {
        const categoryBoxes = document.querySelectorAll(".catego");

        categoryBoxes.forEach(categoryBox => {
            const infoBox = categoryBox.querySelector(".info-box");
            const infoText = categoryBox.querySelector(".info-text");
            const infoImage = categoryBox.querySelector(".info-image");

            // Function to calculate and set the height of .info-box
            const setInfoBoxHeight = () => {
                // Temporarily show both text and image to calculate the maximum height
                infoText.style.display = "block";
                infoImage.style.display = "block";

                // Calculate the heights
                const textHeight = infoText.offsetHeight;
                const imageHeight = infoImage.offsetHeight;

                // Set the fixed height to the maximum of the two
                infoBox.style.height = `${Math.max(textHeight, imageHeight)}px`;

                // Hide the text again
                infoText.style.display = "none";
            };

            // Ensure the image is fully loaded before calculating its height
            if (infoImage.complete) {
                // If the image is already loaded, set the height immediately
                setInfoBoxHeight();
            } else {
                // If the image is not yet loaded, wait for it to load
                infoImage.addEventListener("load", setInfoBoxHeight);
            }

            // Recalculate height on window resize to handle responsive design
            window.addEventListener("resize", setInfoBoxHeight);
        });
    }, 3000);
});

// ==================================== CONTACT SECTION ===============================================

// ========== ZOOM IN AND ZOOM OUT ANIMATION

document.addEventListener("DOMContentLoaded", () => {
    const zoomSection = document.querySelector(".contact-me");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    zoomSection.classList.add("visible"); // Zoom in
                } else {
                    zoomSection.classList.remove("visible"); // Zoom out
                }
            });
        },
        { threshold: 0.4 } // Trigger when 50% of the section is visible
    );

    observer.observe(zoomSection);
});

