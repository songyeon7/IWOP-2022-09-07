function webmaker(user, about, time) {
  const box = document.createElement("div");
  box.className += "box";

  const name = document.createElement("div");
  name.className += "name";
  name.innerText = user;

  const content = document.createElement("div");
  content.className += "content";
  const text = document.createElement("div");
  text.className += "text";
  text.innerText = about;
  content.appendChild(text);

  const date = document.createElement("div");
  date.className += "date";
  date.innerText = time;

  box.appendChild(name);
  box.appendChild(content);
  box.appendChild(date);

  return box;
}

function datamaker(data) {
  var step;

  for (step = 0; step < data.length; step++) {
    const contents = document.querySelector("#main");
    const now = data[step];
    const datahtml = webmaker(now.name, now.content, now.time);
    contents.appendChild(datahtml);
  }
}

function call() {
  const name = document.getElementById("name");
  const content = document.getElementById("content");
  if (name.value == "이름" || name.value == "") {
    alert("이름란에 이름을 입력해주세요!");
  } else {
    if (content.value == "") {
      alert("내용을 입력해주세요!");
    } else {
      fetch("http://localhost:3000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          content: content.value,
        }),
      }).then((res) => console.log(res));
      name.value = "이름";
      content.value = "";
      setTimeout(function () {
        location.reload();
      }, 1000);
    }
  }
}

fetch("http://localhost:3000", { method: "GET" })
  .then((res) => res.json())
  .then((data) => datamaker(data));
