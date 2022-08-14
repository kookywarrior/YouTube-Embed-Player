if (window.top.location.search) {
    const iframe = document.createElement("iframe")
    iframe.id = "iframe"
    iframe.src = `https://www.youtube.com/embed/${String(window.top.location.search.substring(1))}`
    document.body.appendChild(iframe)
} else {
    const bg = document.createElement("div")
    bg.id = "bg"
    document.body.appendChild(bg)
    const box = document.createElement("div")
    box.id = "box"
    box.innerHTML = `<svg id="play" width="20" height="20" fill="red" viewBox="0 0 16 16"><path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437z"/></svg><input type="text" id="link" placeholder="Link...">`
    bg.appendChild(box)
    window.addEventListener("keydown", evt => {
        if (!evt) evt = event;
        if (evt.keyCode === 13) {
            const { ID } = getVideoId(document.getElementById("link").value)
            window.top.location.href = `${window.top.location.origin}${window.top.location.pathname}?${String(ID)}`
        }
    })
    document.getElementById("play").addEventListener("click", () => {
        const { ID } = getVideoId(document.getElementById("link").value)
        window.top.location.href = `${window.top.location.origin}${window.top.location.pathname}?${String(ID)}`
    })
}
