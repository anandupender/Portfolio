const swup = new Swup({
    plugins: [
        new SwupScrollPlugin({
            doScrollingRightAway: false,
            animateScroll: false,
            scrollFriction: 0.3,
            scrollAcceleration: 0.04,
        })
    ]
  });