let list_items = document.querySelectorAll(".sorting_total li");
let label = document.getElementById("total_sales");
console.log(label);

list_items.forEach((e) => {
  e.addEventListener("click", function () {
    list_items.forEach((e2) => {
      e2.classList.remove("my_new_active");
    });
    e.classList.add("my_new_active");
    label.innerHTML = e.innerHTML;
  });
});
