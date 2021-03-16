var loadButton = document.getElementById("loadMoreButton");

function loadMore() {
    var i;
    var content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
    Nullam pulvinar velit sit amet justo lobortis, vel vulputate turpis cursus. \
    Duis viverra ex justo, eu porttitor odio dictum ac. Vivamus ullamcorper sit \
    amet ex ac tempor. Nulla vitae dapibus odio. Sed id congue orci. \
    Morbi elementum venenatis purus eget condimentum. Vivamus \
    tincidunt a nisl at congue. Vestibulum tempus dui id lorem.";
    content = "<article><q>" + content + "</q><h3>-John Doe, Somewhere, USA</h3></article>";
    for(i = 0; i < 3; i++) {
        loadButton.insertAdjacentHTML("beforebegin", content);
    }
}