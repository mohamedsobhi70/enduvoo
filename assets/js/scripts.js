
if ($(".dark-switch").length > 0) {

    const bodyCont = $("body");
    let darkMode = localStorage.getItem("dark-mode");
    const enableDarkMode = () => {
        bodyCont.addClass("dark");
        localStorage.setItem("dark-mode", "enabled");
    };

    const disableDarkMode = () => {
        bodyCont.removeClass("dark");
        localStorage.setItem("dark-mode", "disabled");
    };

    if (darkMode === "enabled") {
        enableDarkMode(); // set state of darkMode on page load
    }

    $(".dark-switch").on("click", function () {
        darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
        if (darkMode === "disabled") {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    })
}


// ===================================================== 
if ($(".play-overlay").length > 0) {
    $(".play-overlay button").on("click", function () {
        let vid = $(this).closest(".play-overlay").siblings("video");
        $(this).closest(".play-overlay").addClass("hidden")
        vid.trigger('play');
        vid.attr('controls', "true");
    })
}


// ===================================================== 

if ($(".popup").length > 0) {

    $(".popup-btn").on("click", function () {
        $(".popup").addClass("active");
        let vido = $(".popup .video-container").attr("data-vid")
        $(".popup .video-container").html(vido);

    })
    $(".popup-close-btn").on("click", function () {
        $(".popup .video-container").html('');
        $(".popup").removeClass("active");
    })
}

if ($(".demo-popup").length > 0) {
    $(".demo-popup-btn").on("click", function () {
        $(".demo-popup").addClass("active")
    })
    $(".demo-popup-close-btn").on("click", function () {
        $(".demo-popup").removeClass("active")
    })
}

if ($(".enduvo-nav-item").length > 0) {

    $(".enduvo-nav-item").on("mouseenter", function () {
        let th = $(this);
        th.find(".end-sub-menu").addClass("active")
    })

    $(".enduvo-nav-item").on("mouseleave", function () {
        let th = $(this);
        th.find(".end-sub-menu").removeClass("active")
    })
}

if ($(".mobile-menu-btn").length > 0) {
    $(".mobile-menu-btn").on("click", function () {
        $(".navbar").addClass("active");
        $("body").addClass("overflow-hidden")
    })
    $(".close-menu-btn").on("click", function () {
        $(".navbar").removeClass("active");
        $("body").removeClass("overflow-hidden")
    })

}

// ********************************************************************
// Accordion Component
if ($(".designpeer-accordion").length > 0) {
    $(".designpeer-accordion").each(function () {

        let $designpeerAccordion = $(this),
            $accordionTitle = $designpeerAccordion.find(".designpeer-tab-title"),
            $accordionType = $designpeerAccordion.data("accordion-type"),
            $accordionSpeed = $designpeerAccordion.data("toogle-speed");

        // Open default actived tab
        $accordionTitle.each(function () {
            if ($(this).hasClass("active-default")) {
                $(this).parent().addClass("active");
                $(this).addClass("show active");
                $(this).next().slideDown($accordionSpeed);
            }
        });

        // Remove multiple click event for nested accordion
        $accordionTitle.unbind("click");

        $accordionTitle.click(function (e) {
            e.preventDefault();
            let $this = $(this);

            if ($accordionType === "accordion") {
                if ($this.hasClass("show")) {
                    $this.removeClass("show active");
                    $this.parent().removeClass("active");
                    $this.next().slideUp($accordionSpeed);
                } else {
                    $designpeerAccordion
                        .find(".designpeer-accordion-item")
                        .removeClass("active");
                    $this.parent().addClass("active");
                    $this
                        .parent()
                        .parent()
                        .find(".designpeer-tab-title")
                        .removeClass("show active");
                    $this
                        .parent()
                        .parent()
                        .find(".designpeer-tab-content")
                        .slideUp($accordionSpeed);
                    $this.toggleClass("show active");
                    $this.next().slideToggle($accordionSpeed);
                }
            } else {
                // For acccordion type 'toggle'
                if ($this.hasClass("show")) {
                    $this.removeClass("show active");
                    $this.parent().removeClass("active");
                    $this.next().slideUp($accordionSpeed);
                } else {
                    $this.addClass("show active");
                    $this.parent().addClass("active");
                    $this.next().slideDown($accordionSpeed);
                }
            }
        });
    });
}