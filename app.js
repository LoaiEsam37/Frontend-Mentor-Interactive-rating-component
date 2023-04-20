const ratingState = document.getElementById("rating--state");
const thankyouState = document.getElementById("thank__you--state");
const submitButton = document.getElementById("submit__rating");
const ratingSpan = document.getElementById("rating");
const ratingButtons = document
  .getElementsByClassName("card__btns")[0]
  .getElementsByTagName("button");

Object.values(ratingButtons).forEach((e) => {
  e.addEventListener("click", () => {
    Object.values(ratingButtons).forEach((btn) => {
      btn.classList.remove("active");
    });
    e.classList.add("active");
    ratingSpan.innerHTML = e.innerHTML;
    submitButton.addEventListener("click", () => {
      ratingState.classList.add("hidden");
      thankyouState.classList.remove("hidden");
    });
  });
});
