const clock = document.getElementById("clock");
function updateTime() {
    const time = new Date();
    let hours = time.getHours();
    let merdium = hours > 12 ? "PM" : "AM";
    hours = (hours % 12 || 12).toString().padStart(2,"0");;
    const mins = time.getMinutes().toString().padStart(2,"0");
    const secs = time.getSeconds().toString().padStart(2,"0");
    clock.textContent = `${hours}:${mins}:${secs} ${merdium}`;
}
setInterval(updateTime, 1000);
