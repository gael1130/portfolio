const tween2 = KUTE.fromTo(
  "#blob3",
  { path: "#blob3" },
  { path: "#blob4" },
  { repeat: 999, duration: 3000, yoyo: true }
).start();
