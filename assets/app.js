let jumboTL = gsap.timeline();

jumboTL
  .fromTo(
    "#jumbo .transparent-color",
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
    "#jumbo .titles h1",
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
    "#jumbo .titles h2",
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
    "#jumbo .state",
    {
      x: "100%",
    },
    {
      x: 0,
      duration: 1,
    }
  )
  .fromTo(
    "#jumbo .store-info",
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
    "#jumbo .store-info img",
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

const twoCollectionTL = gsap.timeline();

twoCollectionTL
  .fromTo(
    "#twocollections .col-md-6",
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
    "#twocollections .left-c span",
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
    "#twocollections .right-c span",
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

let homeController = new ScrollMagic.Controller();

let twoCScene = new ScrollMagic.Scene({
  triggerElement: "#twocollections",
  triggerHook: 0.8,
  reverse: false,
  offset: 200,
  duration: 0,
})
  .setTween(twoCollectionTL)
  // .addIndicators()
  .addTo(homeController);

const headerTL = gsap.timeline();

headerTL
  .fromTo(
    "header",
    {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    {
      backgroundColor: "rgba(0, 0, 0, 1)",
      duration: 0.4,
    }
  )
  .fromTo(
    "header .logo a",
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
  triggerElement: "#jumbo",
  triggerHook: 0.8,
  reverse: true,
  offset: document.querySelector("#jumbo").offsetHeight + 100,
  duration: 0,
})
  .setTween(headerTL)
  // .addIndicators()
  .addTo(homeController);

const horizontalSaleTL = gsap.timeline();

horizontalSaleTL
  .fromTo(
    "#horizontal-sale",
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
  )
  .fromTo(
    "#horizontal-sale .percent-number",
    {
      scale: 0,
    },
    {
      scale: 1,
      duration: 1,
    }
  )
  .fromTo(
    "#horizontal-sale .title",
    {
      scale: 0,
    },
    {
      scale: 1,
    },
    ">-1"
  );

let horizontalSaleScene = new ScrollMagic.Scene({
  triggerElement: "#horizontal-sale",
  triggerHook: 1,
  reverse: true,
  offset: 150,
  duration: document.querySelector("#horizontal-sale").offsetHeight,
})
  .setTween(horizontalSaleTL)
  // .addIndicators()
  .addTo(homeController);

const productsGroupTL = gsap.timeline();

productsGroupTL.fromTo(
  "#products-group .product-bg",
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
  triggerElement: "#products-group",
  triggerHook: 1,
  reverse: true,
  offset: 200,
  duration: 0,
})
  .setTween(productsGroupTL)
  // .addIndicators()
  .addTo(homeController);

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
