const products=[{
    channelicon:'channel-1.jpeg',
    thumbnails:'thumbnail-1.webp',
    vediotime:16.20,
    contentname:'Talking Tech and AI with Google CEO Sundar Pichai!',
    channelname:'Marques Brownlee',
    channelviews:'12M views · 5 years ago',
    vediolinkes:'https://www.youtube.com/watch?v=n2RNcPRtAiY',
},{
    channelicon:'channel-2.jpeg',
    thumbnails:'thumbnail-2.webp',
    vediotime:8.22,
    contentname:'Try Not To Laugh Challenge #9',
    channelname:'Markiplier',
    channelviews:'18M views · 4 months ago',
    vediolinkes:'https://www.youtube.com/watch?v=mP0RAo9SKZk',
},{
    channelicon:'channel-3.jpeg',
    thumbnails:'thumbnail-3.webp',
    vediotime:9.13,
    contentname:'Crazy Tik Toks Taken Moments Before DISASTER',
    channelname:'SSSniperWolf',
    channelviews:'19M views · 4 years ago',
    vediolinkes:'https://www.youtube.com/watch?v=FgjPQQeTh1w',
},{
    channelicon:'channel-4.jpeg',
    thumbnails:'thumbnail-4.webp',
    vediotime:22.09,
    contentname:'The Simplest Math Problem No One Can Solve - Collatz Conjecture',
    channelname:'Veritasium',
    channelviews:'12M views · 1 year ago',
    vediolinkes:'https://www.youtube.com/watch?v=094y1Z2wpJg',
},{
    channelicon:'channel-5.jpeg',
    thumbnails:'thumbnail-5.webp',
    vediotime:11.17,
    contentname:' Kadanes Algorithm to Maximum Sum Subarray Problem',
    channelname:'CS Dojo',
    channelviews:'18M views · 4 months ago',
    vediolinkes:'https://www.youtube.com/watch?v=86CQq3pKSUw',
},{
    channelicon:'channel-6.jpeg',
    thumbnails:'thumbnail-6.webp',
    vediotime:19.56,
    contentname:'Anything You Can Fit In The Circle I’ll Pay For',
    channelname:'MrBeast',
    channelviews:'519K views · 5 years ago',
    vediolinkes:'https://www.youtube.com/watch?v=yXWw0_UfSFg',
},{
    channelicon:'channel-7.jpeg',
    thumbnails:'thumbnail-7.webp',
    vediotime:10.13,
    contentname:' Why Planes Don`t Fly Over Tibet',
    channelname:'RealLifeLore',
    channelviews:'141M views · 1 year ago',
    vediolinkes:'https://www.youtube.com/watch?v=fNVa1qMbF9Y',
},{
    channelicon:'channel-8.jpeg',
    thumbnails:'thumbnail-8.webp',
    vediotime:7.12,
    contentname:'Inside The World`s Biggest Passenger Plane',
    channelname:'Tech Vision',
    channelviews:'6.6M views · 1 year ago',
    vediolinkes:'https://www.youtube.com/watch?v=lFm4EM1juls',
},{
    channelicon:'channel-9.jpeg',
    thumbnails:'thumbnail-9.webp',
    vediotime:13.17,
    contentname:'The SECRET to Super Human STRENGTH',
    channelname:'ThenX',
    channelviews:'3.7M views · 10 months ago',
    vediolinkes:'https://www.youtube.com/watch?v=ixmxOlcrlUc',
},{
    channelicon:'channel-10.jpeg',
    thumbnails:'thumbnail-10.webp',
    vediotime:7.53,
    contentname:'How The Worlds Largest Cruise Ship Makes 30,000 Meals Every Day',
    channelname:'Business Insider',
    channelviews:'20M views · 3 years ago',
    vediolinkes:'https://www.youtube.com/watch?v=R2vXbFp5C9o',
},{
    channelicon:'channel-11.jpeg',
    thumbnails:'thumbnail-11.webp',
    vediotime:4.10,
    contentname:' Dubai`s Crazy Underwater Train and Other Things #Only in Dubai',
    channelname:'Destination Tips',
    channelviews:'14M views · 1 year ago',
    vediolinkes:'https://www.youtube.com/watch?v=0nZuYyXET3s',
},{
    channelicon:'channel-12.jpeg',
    thumbnails:'thumbnail-12.webp',
    vediotime:4.51,
    contentname:'What would happen if you didn’t drink water? - Mia Nacamulli',
    channelname:'TED-Ed',
    channelviews:'3M views · 1 year ago',
    vediolinkes:'https://www.youtube.com/watch?v=9iMGFqMmUFs',
},
{
  channelicon:'unnamed.jpg',
    thumbnails:'thumbnail-13-webp',
    vediotime:210.30,
    contentname:'What would happen if you didn’t drink water? - Mia Nacamulli',
    channelname:'TED-Ed',
    channelviews:'3M views · 1 year ago',
    vediolinkes:'https://www.youtube.com/watch?v=9iMGFqMmUFs',
}];










let html='';
products.forEach((product)=>{

     html +=`
      
       <div class="video-preview js-vedio-preview">
          <div class="thumbnail-row">
          <a href="${product.vediolinkes}">
            <img class="thumbnail" src="thumbnails/${product.thumbnails}"></a>
            <div class="video-time">${(product.vediotime).toFixed(2)}</div>
          </div>
          <div class="video-info-grid">
            <div class="channel-picture">
              <img class="profile-picture" src="channel-pictures/${product.channelicon}">
            </div>
            <div class="video-info">
              <p class="video-title">
                ${product.contentname}
              </p>
              <p class="video-author">
                ${product.channelname}
              </p>
              <p class="video-stats">
                ${product.channelviews}
              </p>
            </div>
          </div>
        </div>
        `
        ;
       
        document.querySelector('.video-grid').innerHTML=html;

});


