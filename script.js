const sheetId = '16RV0Qam2y-b1VoHnozQVSRQdM_mRtFmeRqe6DUGcA2Y';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = 'Sheet1';
const query = encodeURIComponent('Select*');
const url = `${base}&sheet=${sheetName}&tg=${query}`;
const data = [];
document.addEventListener('DOMContentLoaded',init);

function init(){
    console.log('ready');
    fetch(url)
    .then(res => res.text())
    .then(rep => {
        console.log(rep);
        const jsData = JSON.parse(rep.substring(47).slice(0,-2));
        console.log(jsData);
        const colz = [];
        jsData.table.cols.forEach((heading) => {
            if(heading.label) {
                colz.push(heading.label.toLowerCase().replace(/\s/g,''));
            }
        })
        jsData.table.rows.forEach((main)=>{
            console.log(main)
        })
    })
}