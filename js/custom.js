$("#js-rotating").Morphext({
  animation: "flipInX",
  separator: ",",
  speed: 3000,
  complete: function () {
      console.log("This is called after a phrase is animated in! Current phrase index: " + this.index);
  }
});