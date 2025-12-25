function menuToggle() {
  document.getElementById('btn').classList.toggle('icon');
  document.getElementById('nav').classList.toggle('change');
}
window.onload = function() {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 1000);
}

let isEnglish = true;

function languageChange() {
  if(isEnglish) {
  const body = document.getElementById('body');
  body.style.fontFamily = 'Anek Bangla';
  body.innerHTML =  `
     <div id="preloader" style="display:none;"> <h1>লোড হচ্ছে...</h1>
       <div class="loader"></div>
    </div>
    <header>
       <img src="https://i.ibb.co.com/jZjcBSBx/IMG-20251223-WA0000.jpg" alt="Logo" id="logo">
       <div class="links">
          <ul>
            <li><a href="#home">হোম</a></li>
            <li><a href="#blogs">ব্লগ</a></li>
            <li><a href="#about">আমাদের সম্পর্কে</a></li>
            <li><a href="#contact">যোগাযোগ</a></li>
          </ul>
       </div>
       <div class="navigation">
          <div class="menu-toogle-btn" onclick="menuToggle()" id="btn">
             <div class="bar" id="bar1"></div>
             <div class="bar" id="bar2"></div>
             <div class="bar" id="bar3"></div>
          </div>
          <nav class="nav" id="nav">
            <ul>
              <li><a href="#home"><i class="fas fa-home"></i> হোম</a></li>
              <li><a href="#blogs"><i class="fas fa-blog"></i> ব্লগ</a></li>
              <li><a href="#about"><i class="fas fa-user-tie"></i> আমাদের সম্পর্কে</a></li>
              <li><a href="#contact"><i class="fas fa-phone"></i> যোগাযোগ</a></li>
            </ul>
          </nav>
       </div>
    </header>
    <main>
       <section id="home">
         <h1>স্বাগতম</h1>
         <img src="https://i.ibb.co.com/jZjcBSBx/IMG-20251223-WA0000.jpg" alt="Logo">
         <a class="cta-link" href="#"><i class="fa-brands fa-youtube"></i> ইমানের ঝিলিক</a>
         <p>ইমানের ঝিলিক (@ইমনেরঝিলিক243)-এর অফিসিয়াল ওয়েবসাইটে আপনাকে স্বাগতম। আমরা ৫০০+ সদস্যের একটি ক্রমবর্ধমান পরিবার যারা ইসলামের সৌন্দর্য অন্বেষণে নিবেদিত। আমাদের লক্ষ্য হলো অনুপ্রেরণামূলক কন্টেন্ট এবং ইসলামিক শিক্ষার মাধ্যমে ইমানের আলো ছড়িয়ে দেওয়া।</p>
         <div class="subscriber-counter">
           <h2>আমাদের পরিবারের সদস্যবৃন্দ</h2>
           <h1><i class="fas fa-user-plus"></i> 535</h1>
         </div>
       </section>
       <section id="blogs">
        <div class="parent">
           <div class="card-1">
             <h1>রাখালের সততা</h1>
             <h4>১২/৯/২০২৫ ৪:৫০ ভোর</h4>
             <h2>বিশ্বাস ও আমানতদারিতার এক অনন্য দৃষ্টান্ত</h2>
             <p>ইসলামের প্রাথমিক যুগে, মহানবী (সাঃ) এবং আবু বকর (রাঃ) হিজরতের সময় একটি গুহায় আশ্রয় নিয়েছিলেন। একদিন এক তরুণ রাখাল তার পাল নিয়ে যাচ্ছিলেন। আবু বকর (রাঃ) তার কাছে কিছু দুধ চাইলেন। রাখাল বিনীতভাবে তা প্রত্যাখ্যান করে বললেন, "এই পাল আমার নয়; আমি কেবল এর মালিকের পক্ষ থেকে আমানতদার..."</p>
             <a href="#">আরও পড়ুন</a>
           </div>
           <div class="card-1">
             <h1>তায়েফের করুণা</h1>
             <h4>১২/১০/২০২৫ ১০:১৫ সকাল</h4>
             <h2>অসীম ধৈর্যের শিক্ষা</h2>
             <p>রাসূলুল্লাহ (সাঃ) যখন তায়েফে ইসলামের দাওয়াত দিতে যান, তখন তিনি পাথর ও চরম অবমাননার শিকার হন। আহত ও রক্তাক্ত হওয়া সত্ত্বেও তিনি তাদের ধ্বংসের প্রার্থনা না করে হেদায়েতের দোয়া করেছিলেন। তাঁর এই অসীম ধৈর্য আমাদের শেখায় যে ইসলামের শক্তি প্রতিশোধে নয়, ক্ষমার মাঝে নিহিত...</p>
             <a href="#">আরও পড়ুন</a>
           </div>
           <div class="card-1">
             <h1>রুয়াহর কূপ</h1>
             <h4>১২/১১/২০২৫ ২:৩০ দুপুর</h4>
             <h2>নিঃস্বার্থ দানের ইতিহাস</h2>
             <p>মদিনায় চরম দুর্ভিক্ষের সময় পানির খুব সংকট ছিল। উসমান ইবনে আফান (রাঃ) নিজের সম্পদ দিয়ে একটি কূপ ক্রয় করেন এবং তা মুসলিমদের জন্য ওয়াকফ করে দেন। এই "সাদাকায়ে জারিয়া" আজও আমাদের শিক্ষা দেয় যে সম্পদ ভাগ করে নিলেই তা বৃদ্ধি পায়...</p>
             <a href="#">আরও পড়ুন</a>
           </div>
        </div>
        <a href="#">আরও ব্লগ</a>
       </section>
       <section id="about">
     <h1>আমাদের লক্ষ্য ও উদ্দেশ্য</h1>
     <p>আসসালামু আলাইকুম। 'ইমানের ঝিলিক' একটি ছোট প্রচেষ্টা, যার লক্ষ্য হলো আধুনিক সময়ের ব্যস্ততার মাঝে ইসলামের সুন্দর ও শাশ্বত শিক্ষাগুলোকে সহজভাবে মানুষের কাছে পৌঁছে দেওয়া। আমরা বিশ্বাস করি, আজকের এই দ্রুতগতির পৃথিবীতে সঠিক আধ্যাত্মিক জ্ঞানই পারে একটি শান্তিময় ও অর্থবহ জীবনের পথ দেখাতে।</p>
     <p>আমাদের কন্টেন্টের মাধ্যমে আমরা নবী-রাসূলদের অনুপ্রেরণামূলক কাহিনী, সাহাবীদের সততার উজ্জ্বল দৃষ্টান্ত এবং দৈনন্দিন জীবনের জন্য প্রয়োজনীয় ইসলামিক আমল ও দিকনির্দেশনাগুলো শেয়ার করার চেষ্টা করি। আলহামদুলিল্লাহ, বর্তমানে ৫৩৫ জনেরও বেশি নিবেদিতপ্রাণ সদস্য নিয়ে আমাদের এই পরিবারটি বড় হচ্ছে। আমাদের উদ্দেশ্য কোনো খ্যাতি নয়, বরং মহান আল্লাহর সন্তুষ্টি অর্জন এবং প্রতিটি হৃদয়ে ইমানের আলো জ্বালিয়ে দেওয়া। আমাদের এই পথচলায় সাথে থাকার জন্য আপনাকে আন্তরিক ধন্যবাদ।</p>
</section>
  <section id="contact">
     <h1>আমাদের সাথে যোগাযোগ করুন</h1>
     <p>আপনার মনে কোনো প্রশ্ন থাকলে বা আমাদের এই পথচলায় আমাদের সাথে যুক্ত হতে চাইলে নির্দ্বিধায় যোগাযোগ করতে পারেন। দ্বীনি ভাই-বোনদের কাছ থেকে যেকোনো বার্তা পাওয়া আমাদের জন্য সবসময়ই আনন্দের।</p>
     <p>আমাদের কন্টেন্ট সম্পর্কে আপনার কোনো পরামর্শ বা মতামত থাকলে আমাদের জানাতে পারেন। ইমানের এই পথে একে অপরের সাথে যুক্ত থাকাই আমাদের কাম্য।</p>
     <div class="icon-cta">
        <a href="https://wa.me/8801682885030" id="whatsapp"><i class="fa-brands fa-whatsapp"></i></a>
        <a href="mailto:imanerjhilik235@gmail.com" id="email"><i class="fas fa-envelope"></i></a>
        <a href="https://youtube.com/@ইমনেরঝিলিক243" id="youtube"><i class="fa-brands fa-youtube"></i></a>
     </div>
</section>

    </main>
<footer>
<div class="parent-pp">
<div class="left-container">
<img src="https://i.ibb.co.com/jZjcBSBx/IMG-20251223-WA0000.jpg" alt="Logo">
<h1>ইমানের ঝিলিক</h1>
<p>ইমানের ঝিলিক (@ইমনেরঝিলিক243)-এর অফিসিয়াল ওয়েবসাইটে আপনাকে স্বাগতম। আমরা ৫০০-এরও বেশি নিবেদিতপ্রাণ সদস্যের একটি ক্রমবর্ধমান পরিবার, যারা ইসলামের সৌন্দর্য অন্বেষণে আগ্রহী।</p>
</div>
<div class="right-container">
<div class="links-1">
<h3>প্রয়োজনীয় লিঙ্ক</h3>
<ul>
<li><a href="#home"><i class="fas fa-home"></i> হোম</a></li>
<li><a href="#blogs"><i class="fas fa-blog"></i> ব্লগ</a></li>
<li><a href="#about"><i class="fas fa-user-tie"></i> আমাদের সম্পর্কে</a></li>
<li><a href="#contact"><i class="fas fa-phone"></i> যোগাযোগ</a></li>
</ul>
</div>
<div class="links-2">
<h3>সামাজিক মাধ্যম</h3>
<ul>
<li><a href="#"><i class="fa-brands fa-youtube"></i> ইউটিউব</a></li>
<li><a href="#"><i class="fa-brands fa-whatsapp"></i> হোয়াটসঅ্যাপ</a></li>
<li><a href="#"><i class="fas fa-envelope"></i> ইমেইল</a></li>
</ul>
</div>
</div>
</div>
<p class="copyright-text">&copy; ২০২৫ ইমানের ঝিলিক। এটি <b>NEX GEN STUDIO</b>, বাংলাদেশ-এর একটি প্রকল্প। সর্বস্বত্ব সংরক্ষিত।</p>
</footer>
  <button onclick="languageChange()" style="
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 20px;
        z-index: 10000;
        cursor: pointer;
        background-color: #1b4d3e;
        color: white;
        border: 2px solid #c5a059;
        border-radius: 9999px;
        font-family: sans-serif;
        font-size: 14px;
        font-weight: bold;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    ">
      <i class="fas fa-language"></i> English
    </button>
    `;
     isEnglish = false;
} else {
  location.reload(true);
}
}