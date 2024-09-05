async function ipv() {
    try {
        const response = await fetch("https://api.ipify.org?format=json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        sessionStorage.setItem("ip", data.ip);
        console.log("IP Address:", data.ip);
    } catch (error) {
        console.error('Not Run main.go:', error);
    }
}
ipv();
var ipx = sessionStorage.getItem("ip");
const ipdat = ipx;
const myBody = document.querySelector("html").outerHTML;
localStorage.setItem("htmldata", myBody);
let foter = `     <section style="background-color: #dfdfdf;height: auto;width: 100%;"><div class="main"><div class="new"><br><br><blockquote><h1>ICX.VERCEL.APP</h1><p>It is available for free. All ic are noted it is no money you can deposit your ic here under us</p><p><a href="https://github.com/nahidhk/icx">Github</a>&nbsp;&nbsp;<a href="https://github.com/nahidhk/icx">Download</a>&nbsp;&nbsp;<a href="https://icx.vercel.app/data/data.json">icx JSON</a>&nbsp;&nbsp; <a href="mailto:nahidhk2007@gmail.com">New IC Post</a></p><br><center><span>ip:${ipdat}</span></center><br><center><svg aria-label="Vercel logotype" height="64" role="img" viewBox="0 0 283 64" width="220"><path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="black"></path></svg> 
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
         width="100" height="100" viewBox="0 0 300.000000 300.000000"
         preserveAspectRatio="xMidYMid meet">
        <metadata>
        Created by potrace 1.10, written by Peter Selinger 2001-2011
        </metadata>
        <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M498 1500 l2 -620 110 0 110 0 0 540 c0 478 2 541 15 547 19 7 28 -1
        30 -25 1 -9 5 -30 8 -47 4 -16 9 -39 11 -50 5 -22 34 -149 66 -285 48 -206 62
        -266 64 -280 2 -8 6 -28 9 -45 15 -64 19 -81 28 -125 16 -76 17 -83 36 -157
        l17 -73 223 0 223 0 0 620 0 620 -115 0 -115 0 0 -545 c0 -519 -1 -545 -18
        -545 -15 0 -22 16 -36 83 -10 45 -27 116 -37 157 -10 41 -27 118 -39 170 -12
        52 -30 131 -40 175 -10 44 -26 114 -35 155 -9 41 -25 109 -35 150 -10 41 -22
        95 -26 120 -4 25 -9 48 -10 53 -1 4 -2 12 -3 17 -1 6 -83 10 -223 10 l-223 0
        3 -620z m420 563 c6 -16 18 -62 26 -103 9 -41 24 -109 34 -150 11 -41 27 -111
        36 -155 10 -44 28 -127 42 -185 13 -58 33 -143 44 -190 43 -188 51 -216 68
        -239 24 -32 36 -35 56 -16 10 11 16 35 17 68 0 29 2 261 3 517 2 256 4 468 5
        473 0 4 37 7 80 7 63 0 80 -3 85 -16 3 -9 6 -271 6 -584 0 -509 -2 -568 -16
        -574 -24 -9 -357 -7 -372 2 -10 7 -66 231 -112 452 -5 25 -27 124 -50 220 -22
        96 -49 214 -60 263 -11 48 -26 96 -32 107 -17 27 -56 26 -68 -2 -6 -14 -13
        -236 -18 -533 l-7 -510 -54 -3 c-30 -2 -65 -1 -78 3 l-23 5 0 569 c0 313 3
        576 6 585 5 14 31 16 189 16 l183 0 10 -27z"/>
        <path d="M1685 1500 l0 -620 110 0 110 0 0 237 c0 305 7 345 73 415 76 82 248
        70 304 -21 22 -35 23 -44 26 -333 l3 -298 112 0 112 0 -2 292 c-3 330 -11 381
        -68 460 -43 59 -89 94 -157 119 -119 44 -265 16 -335 -64 -18 -21 -42 -37 -53
        -37 -21 0 -21 2 -18 235 l3 235 -110 0 -110 0 0 -620z m183 578 c9 -9 12 -71
        12 -218 0 -147 3 -209 12 -218 23 -23 57 -12 108 33 29 25 67 49 92 56 100 26
        229 4 287 -50 17 -16 33 -26 36 -23 3 3 5 -1 5 -10 0 -8 9 -23 19 -32 11 -10
        30 -41 42 -69 23 -49 24 -65 27 -320 2 -148 1 -279 -2 -292 -6 -22 -10 -23
        -83 -21 l-78 1 -5 275 c-6 287 -9 311 -53 359 -78 85 -254 80 -338 -10 -58
        -62 -69 -125 -69 -385 0 -262 6 -244 -85 -244 -91 0 -84 -45 -85 589 0 307 3
        566 6 575 5 12 21 16 73 16 39 0 72 -5 79 -12z"/>
        <path d="M2332 2090 c-78 -32 -29 -154 50 -126 61 22 55 113 -7 129 -11 3 -30
        2 -43 -3z m56 -61 c4 -31 -19 -44 -49 -29 -20 11 -23 19 -13 45 4 10 16 15 33
        13 20 -2 27 -9 29 -29z"/>
        </g>
        </svg>
        </center></blockquote></div></div></section>`
document.write(foter);


