for (var i = 1; i <= 90; i++) {
  setTimeout(
    function (index) {
      console.log(index / 10);
    },
    100 * i,
    i
  );
}

for (let i = 0; i <= 90; i++) {
  setTimeout(() => {
    console.log(i / 10);
  }, 100 * i);
}
