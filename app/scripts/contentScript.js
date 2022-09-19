'use strict';

const init = () =>  {
  const myCurrentScheduledRessons = document.querySelectorAll('.card.hidden-mb');
  myCurrentScheduledRessons.forEach(schedule=>{
    const ressonDate=schedule.querySelector('.date_time span.date').innerText;
    const ressonTime=schedule.querySelector('.date_time span.time').innerText;
    const studioLocation = schedule.querySelector('.tenpo span').innerText;
    const ressonProglam = schedule.querySelector('.program a').innerText;
    const ressonBikeNumber = schedule.querySelector('.bike_number span').innerText.replace("#","");
    const ressonInstructor = schedule.querySelector('.instructor span').innerText;

    const [yyyy, mm, dd] = ressonDate.match(new RegExp(/(\d{4})\/(\d{2})\/(\d{2})/)).splice(-3, 3);
    const [start, end] = ressonTime.match(new RegExp(/(\d{2}:\d{2}).+?(\d{2}:\d{2})/)).splice(-2, 2);

    const dates = `${yyyy}${mm}${dd}T${start.replace(':', '')}/${yyyy}${mm}${dd}T${end.replace(':', '')}`;
    const base = 'https://www.google.com/calendar/render?';
    const action = 'TEMPLATE';
    const text = `FeelCycle ${studioLocation}[%23${ressonBikeNumber}]`;
    const details = `FeelCycleの予定です%0D%0A${ressonProglam}%0D%0A${studioLocation}%0D%0A%23${ressonBikeNumber}%E3%80%80[${studioLocation}]%0D%0A${ressonInstructor}`;
    const googleCalenderCreateUri = `${base}action=${action}&text=${text}&dates=${dates}&details=${details}`

    const calLinkAncher = document.createElement('a');
    calLinkAncher.href = googleCalenderCreateUri;
    calLinkAncher.innerText = "GoogleCalender登録";
    calLinkAncher.target = '_blank';
    calLinkAncher.setAttribute('style',"display:block;font-size:0.8rem;")
    calLinkAncher.class = "gcalLink"
    schedule.querySelector('.date_time').appendChild(calLinkAncher);

  })
}

let interval_id;
let counter;
interval_id = setInterval(() => {
  if (document.querySelector('.invite_table')) {
    init();
    clearInterval(interval_id);
  } else {
    console.log("構築中 100msで再実行 max 30");
    counter++;
  }
  if (counter > 30) {
    clearInterval(interval_id);
  }
}, 100)
