let homeController = new ScrollMagic.Controller();
let homeActive = document.querySelector(".template-index");

// HEADER ANIMATIONS START
let headerNodes = document.querySelectorAll("header");
if (headerNodes != null) {
  headerNodes.forEach((node) => {
    let headerTL = gsap.timeline();

    headerTL
      .fromTo(
        node,
        {
          backgroundColor: "rgba(0, 0, 0, 0)",
        },
        {
          backgroundColor: "rgba(0, 0, 0, 1)",
          duration: 0.4,
        }
      )
      .fromTo(
        node.querySelectorAll(".logo a"),
        {
          scale: 1,
        },
        {
          scale: 0.8,
          duration: 0.4,
        },
        ">-0.4"
      );
    let headerScene = new ScrollMagic.Scene({
      triggerElement: "body",
      triggerHook: 0,
      reverse: true,
      offset:
        homeActive != null
          ? document.querySelector("header").offsetHeight + 100
          : 0,
      duration: 0,
    })
      .setTween(headerTL)
      // .addIndicators()
      .addTo(homeController);
  });
}

// HEADER ANIMATIONS END
// JUMBO ANIMATIONS START
let jumboNodes = document.querySelectorAll(".jumbo-section");
if (jumboNodes != null) {
  jumboNodes.forEach((node) => {
    let jumboTL = gsap.timeline();

    jumboTL
      .fromTo(
        node.querySelectorAll(".transparent-color"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.5,
        }
      )
      .fromTo(
        "header .logo",
        {
          x: -200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.3,
        }
      )
      .fromTo(
        "header .menu",
        {
          x: 200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.3,
        },
        ">-1.3"
      )
      .fromTo(
        node.querySelectorAll(".titles h1"),
        {
          x: 0,
          opacity: 0,
        },
        {
          x: window.innerWidth * 0.08,
          opacity: 1,
          duration: 1,
        },
        ">-.3"
      )
      .fromTo(
        node.querySelectorAll(".titles h2"),
        {
          x: 0,
          opacity: 0,
        },
        {
          x: window.innerWidth * 0.07,
          opacity: 1,
          duration: 1,
        },
        ">-.7"
      )
      .fromTo(
        node.querySelectorAll(".state"),
        {
          x: "100%",
        },
        {
          x: 0,
          duration: 1,
        }
      )
      .fromTo(
        node.querySelectorAll(".store-info"),
        {
          y: "100%",
        },
        {
          y: 0,
          duration: 1,
        },
        ">-1.8"
      )
      .fromTo(
        node.querySelectorAll(".store-info img"),
        {
          y: 400,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
        },
        ">-2"
      );
  });
}
// JUMBO ANIMATIONS END
// TWO COLLECTIONS ANIMATIONS START
let twoCollectionsNodes = document.querySelectorAll(".twoCollections-section");
if (twoCollectionsNodes != null) {
  twoCollectionsNodes.forEach((node) => {
    let tl = gsap.timeline();

    tl.fromTo(
      node.querySelectorAll(".col-md-6"),
      {
        y: 300,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      }
    )
      .fromTo(
        node.querySelectorAll(".left-c span"),
        {
          y: 300,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
        }
      )
      .fromTo(
        node.querySelectorAll(".right-c span"),
        {
          y: 300,
          opacity: 0,
        },
        {
          y: -100,
          opacity: 1,
          duration: 1,
        },
        ">-0.8"
      );

    let twoCScene = new ScrollMagic.Scene({
      triggerElement: node,
      triggerHook: 0.8,
      reverse: false,
      offset: 200,
      duration: 0,
    })
      .setTween(tl)
      // .addIndicators()
      .addTo(homeController);
  });
}

// TWO COLLECTIONS ANIMATIONS END
// HORIZONTAL SALE ANIMATIONS START
let horizontalSaleNodes = document.querySelectorAll(".horizontal-sale-section");
if (horizontalSaleNodes != null) {
  horizontalSaleNodes.forEach((node) => {
    let tl = gsap.timeline();

    tl.fromTo(
      node,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    )
      .fromTo(
        node.querySelectorAll(".percent-number"),
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 1,
        }
      )
      .fromTo(
        node.querySelectorAll(".title"),
        {
          scale: 0,
        },
        {
          scale: 1,
        },
        ">-1"
      );

    let horizontalSaleScene = new ScrollMagic.Scene({
      triggerElement: node,
      triggerHook: 1,
      reverse: true,
      offset: 150,
      duration: node.offsetHeight,
    })
      .setTween(tl)
      // .addIndicators()
      .addTo(homeController);
  });
}
// HORIZONTAL SALE ANIMATIONS END
// PRODUCTS GROUP ANIMATIONS START
let productsGroupNodes = document.querySelectorAll(".products-group-section");
if (productsGroupNodes != null) {
  productsGroupNodes.forEach((node) => {
    let tl = gsap.timeline();

    tl.fromTo(
      node.querySelectorAll(".product-bg"),
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 0.3,
      }
    );

    let productsGroupScene = new ScrollMagic.Scene({
      triggerElement: node,
      triggerHook: 1,
      reverse: true,
      offset: 200,
      duration: 0,
    })
      .setTween(tl)
      // .addIndicators()
      .addTo(homeController);
  });
}
// PRODUCTS GROUP ANIMATIONS END
// FOOTER ANIMATIONS START

const footerTL = gsap.timeline();

footerTL.fromTo(
  "footer .footer-fade-in",
  {
    opacity: 0,
    y: 100,
  },
  {
    opacity: 1,
    y: 0,
    stagger: 0.3,
    duration: 0.3,
  }
);

let footerScene = new ScrollMagic.Scene({
  triggerElement: "footer",
  triggerHook: 1,
  reverse: true,
  offset: 0,
  duration: 0,
})
  .setTween(footerTL)
  // .addIndicators()
  .addTo(homeController);

// FOOTER ANIMATIONS END
// MOBILE MENU ANIMATIONS START
const mobileMenuTL = gsap.timeline({
  paused: true,
});

mobileMenuTL
  .fromTo(
    "#mobile-menu",
    {
      x: "-100%",
    },
    {
      x: 0,
      duration: 0.8,
    }
  )
  .fromTo(
    "#mobile-menu .menu .link",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.2,
    }
  );

const openMobileMenu = document.querySelector(".open-mobile-menu");
openMobileMenu.addEventListener("click", () => {
  mobileMenuTL.play();
});

const closeMobileMenu = document.querySelector(".close-mobile-menu");
closeMobileMenu.addEventListener("click", () => {
  mobileMenuTL.reverse();
});

const mobileModeOn = () => {
  if (window.innerWidth <= 991) {
    document.querySelector("header .menu").classList.add("mobile-mode");
  } else {
    document.querySelector("header .menu").classList.remove("mobile-mode");
  }
};
mobileModeOn();
window.addEventListener("resize", function (event) {
  mobileModeOn();
});
// MOBILE MENU ANIMATIONS END
