let main = document.querySelector(".main");
let mainBODY = document.querySelector("body");

let navBarHTML = ` 
    <nav class="z-depth-5 navBar">
        <ul>
            <li><a class="OSIJobs waves-effect waves-light navOptions" href="#splash">OSI Jobs</a></li>
            <li><a class="social facebook" href="http://www.facebook.com/pages/OSI/314041371978411" target="blank">f</a></li>
            <li><a class="social linkedIn" href="http://www.linkedin.com/company/2497623" target="blank">i</a></li>
            <li><a class="social twitter" href="http://twitter.com/osifoodjobs" target="blank">l</a></li>
        </ul>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a class="waves-effect waves-light navOptions" href="#about">About</a></li>
            <li><a class="waves-effect waves-light navOptions" href="#jobs">Jobs</a></li>
            <li><a class="waves-effect waves-light navOptions" href="#recruiting">Medical Recruiting</a></li>
            <li><a class="waves-effect waves-light navOptions" href="#partnerships">Partnerships</a></li>
            <li><a class="waves-effect waves-light navOptions" href="#services">Services</a></li>
            <li><a class="waves-effect waves-light navOptions" href="#contact">Contact</a></li>
        </ul>
        <div id="dropdown" class="show-on-med-and-down"><a>Menu</a></div>
        <div id="panel" class="col show-on-med-and-down right">
            <a class="waves-effect waves-light dropdownOptions" href="#about">About</a>
            <a class="waves-effect waves-light dropdownOptions" href="#jobs">Jobs</a>
            <a class="waves-effect waves-light dropdownOptions" href="#services">Services</a>
            <a class="waves-effect waves-light dropdownOptions" href="#partnerships">Partnerships</a>
            <a class="waves-effect waves-light dropdownOptions" href="#recruiting">Medical Recruiting</a>
            <a class="waves-effect waves-light dropdownOptions" href="#contact">Contact</a>
        </div>
    </nav>
`;

let pagesOpenerHTML = `<div class="parallax">`;

let splashHTML = `
    <div id="splash" class="parallax_group">
        <div class="parallax_layer parallax_layer--base z-depth-5">
            <div class="title mainTitle left">
                <h1 class="splashHeader">OSI Jobs</h1>
                <h3>Excellence in Food Industry Recruitment</h3>
                <br>
                <div>
                    <div id="titleJobsResponse"></div>
                </div>
            </div>
            <div>
                <img class="z-depth-5 splashImage right" src="./public/images/people_in_market.jpg" />
            </div>
        </div>
    </div>
`;

let aboutHTML = `
    <div id="about" class="parallax_group">
        <div class="parallax_layer parallax_layer--base">
            <div class="aboutLeftBody">
                <div class="member row">
                    <div class="col s4">
                        <img class="memberImage" src="../public/images/Tim.jpeg">
                        <div class="memberInfo">Tim Oliver | Recruiter | Senior Partner</div>
                    </div>
                    <div class="aboutInfo col s7">
                        <p>
                            Tim has been recruiting in the food industry for 25+ years. He previously held office level positions with two other nationwide 
                            search firms before starting OSI, his own company of food industry recruiters, in 1992. Tim has BS & MS degrees in Food Science 
                            from the University of Georgia. He worked in R&D for a Fortune 500 company and a Production Supervisor for a major food processor. 
                            He is a Certified Personnel Consultant as awarded by the National Association of Personnel Services.
                        </p>
                    </div>
                </div>
                <div class="member row">
                    <div class="col s4">
                        <img class="memberImage" src="../public/images/Dave.png">
                        <div class="memberInfo">Dave Buergler | Recruiter | Senior Partner</div>
                </div>
                <div class="aboutInfo col s7">
                    <p>
                        Dave has BS and MS degrees from the University of Missouri. He has 25+ years of industry experience. Dave started his career as a Food 
                        Technologist for a Fortune 500 company. Then he moved into the area of Sensory/Marketing Research. Dave then joined a large foodservice 
                        company as Senior Manager of Marketing Research. He eventually held Director-level positions in New Product Marketing, Brand Management, 
                        and Field Marketing. Dave took his background and experience to the team of food industry recruiters in 1998.
                    </p>
                </div>
                </div>
                <div class="member row">
                    <div class="col s4">
                        <img class="memberImage" src="../public/images/Joel(1).png">
                        <div class="memberInfo">Joel Oliver | Recruiter</div>
                    </div>
                <div class="aboutInfo col s7">
                    <p>
                        Joel followed in his father’s footsteps as a recruiter after completing his Masters degree. What began as a temporary job to make ends 
                        meet has turned into a career. With his M.Div., his heart is for ministry and serving God’s church globally. But today’s economy calls 
                        more and more for bivocational ministers. Joel has been with OSI since 2012 including a 12 month sabbatical to serve with his wife as 
                        missionaries in Honduras.
                    </p>
                </div>
                </div>
            </div>
        </div>
        <div class="parallax_layer parallax_layer--back">
            <div class="aboutRightBody">
            </div>
        </div>
    </div>
`;

let jobsHTML = `
    <div id="jobs" class="parallax_group darkText">
        <div class="parallax_layer parallax_layer--fore">
            <div class="title jobsForegroundTitle">
            </div>
            <div class="col s12 m4 jobsRightBody">
                <h5>New Jobs:</h5>
                <div id="loxoResponse"></div>
                <div class="jobsRightExtra">
                    <h4>Lorem ipsum</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.
                        Rhoncus aenean vel elit scelerisque. Neque egestas congue quisque egestas diam in arcu cursus.
                        Vulputate mi sit amet mauris
                        commodo quis imperdiet massa. </p>
                    <h4>Morbi leo</h4>
                    <p>Morbi leo urna molestie at. Porttitor leo a diam sollicitudin tempor id. Urna et pharetra pharetra
                        massa massa ultricies mi quis hendrerit. Dolor magna eget est lorem ipsum dolor sit amet
                        consectetur. Libero volutpat sed cras
                        ornare arcu dui vivamus. Gravida rutrum quisque non tellus orci ac auctor. Suspendisse ultrices
                        gravida dictum fusce ut placerat
                        orci nulla pellentesque. Viverra nam libero justo laoreet sit amet.</p>
                </div>
            </div>
        </div>
        <div class="parallax_layer parallax_layer--base">
            <div class="title jobsBaseTitle"></div>
            <div class="jobsLeftBody s12 m4">
                <div class="">
                    <h5 class="center">Excellence in Food Industry Recruitment</h5>
                    <p>At OSI, we specialize in food industry executive recruitment. Whether you are an employer looking for
                        the perfect candidate, or you a food industry professional looking to make a change, feel free to
                        take a look around.<br></p>
                </div>
                <div class="">
                    <h5 class="center">We fill the following types of positions</h5>
                    <p>Operations/Manufacturing • Purchasing/Supply Chain • Research & Development • Quality Assurance •
                        Sales (National/Regional/DSD) • Engineering/Maintenance • CEO, CFO, COO, GM • Project Management •
                        Customer Service • Food Safety • Distribution/Logistics Management • Sanitation<br></p>
                </div>
                <div class="">
                    <h5 class="center">Our Mission Statement:</h5>
                    <p>Our mission is to provide our clients with the highest quality service, professionalism and ethics,
                        while pleasing God in all that we do.</p>
                </div>
            </div>
        </div>
    </div>
    `;

let recruitingHTML = `
    <div id="recruiting" class="parallax_group">
        <div class="parallax_layer parallax_layer--base">
            <div class="title">Base Layer 4</div>
        </div>
        <div class="parallax_layer parallax_layer--back">
            <div class="title">Background Layer </div>
        </div>
        <div class="parallax_layer parallax_layer--deep">
            <div class="title">Deep Background Layer</div>
        </div>
    </div>
`;

let partnershipsHTML = `
    <div id="partnerships" class="parallax_group darkText">
        <div class="parallax_layer parallax_layer--fore">
            <div class="title">Foreground Layer 2</div>
        </div>
        <div class="parallax_layer parallax_layer--base">
            <div class="title">Base Layer 5</div>
        </div>
    </div>
`;

let servicesHTML = `
    <div id="services" class="parallax_group">
        <div class="parallax_layer parallax_layer--back">
            <div class="title">Background Layer</div>
        </div>
        <div class="parallax_layer parallax_layer--base">
            <div class="title">Base Layer 6</div>
        </div>
    </div>
`;

let contactHTML = `
    <div id="contact" class="parallax_group darkText">
        <div class="parallax_layer parallax_layer--fore">
            <div class="title">Foreground Layer 3</div>
            <div>
                We are a member of <a href="https://southeast-recruiters.com" target="_blank" rel="noopener noreferrer">Bio-Partners</a>. It’s a consortium of highly experienced, successful recruiters specializing in key talent. In pharmaceutical, biotech/life sciences, medical device, bioinformatics, information technology, & healthcare corporations.
            </div>
        </div>
        <div class="parallax_layer parallax_layer--base">
            <div class="title">Base Layer 7</div>
            <div>
                <p>OSI, a group of food industry recruiters, was established in 1992 and currently operates offices in Georgia, North Carolina, and Northern Virginia. OSI is a member of and adheres to all ethics and standards of the Georgia Association of Personnel Services. Our mission is to provide our clients with the highest quality service, professionalism and ethics, while pleasing God in all that we do.</p>
            </div>
        </div>
    </div>
`;

let pagesCloserHTML = `</div>`;

//==================================END OF HTML TO BE INJECTED================================

// combine all HTML

let mainHTML =
  pagesOpenerHTML +
  splashHTML +
  aboutHTML +
  jobsHTML +
  recruitingHTML +
  partnershipsHTML +
  servicesHTML +
  contactHTML +
  pagesCloserHTML;

//==================================INJECTION OF HTML ONLOAD==================================

$(main).html(mainHTML);

// prototype function to shuffle response array from loxo, if you so choose

Array.prototype.shuffle = function() {
  let i = this.length,
    j,
    placeHolder;
  if (i == 0) return this;
  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    placeHolder = this[i];
    this[i] = this[j];
    this[j] = placeHolder;
  }
  return this;
};

// function to remove ball from styling in the Window
setTimeout(() => {
  $(".ball").css({
    position: "unset",
    visibility: "none !important",
    border: "none",
    animation: "none",
    "margin-top": "43px"
  });

  let a = "sic b3NpX2pvYnM6NDc1NjI5YTQzMW";
  let Aa = "MyNWEwNzlmMzBkYTFlYmY5Mjk4MDQ";

  // prepend the navbar

  $(main).prepend(navBarHTML);

  //==============================Styling for hover on navbar links==============================

  $(".navOptions").hover(
    function() {
      $(this).css({
        transform: "scale(1.2)",
        color: "#88D498"
      });
    },
    function() {
      $(this).css({
        transform: "scale(1)",
        color: "#F3E9D2"
      });
    }
  );
  $(".dataItem").hover(
    function() {
      $(this).css("color", "#F3E9D2");
    },
    function() {
      $(this).css("color", "#062F4F");
    }
  );

  //==================================AJAX REQUEST FOR LOXO JOBS================================

  $.ajax({
    url: "https://loxo.co/api/osi-jobs/jobs",
    type: "GET",
    // loxo docs are very unforgiving, and this set header was only sent after multiple painful emails to support.
    // this might get changed at some point, but that (Basic junk) is the base-64 encoding of the username and password
    beforeSend: xhr => {
      xhr.setRequestHeader("Authorization", "Ba" + a + Aa + "=");
    },
    // the following is the parameter passed in to only get active jobs from the database of jobs for OSI. Other params can be found in the docs:
    // http://help.loxo.co/articles/446640-integrate-your-job-listing-with-your-website-through-an-api
    // be warned-- they are the weakest of sauce.
    data: { job_status_id: 2841 },
    // not sure why this is here.
    xhrFields: { withCredentials: true },
    // this is where the magic happens
    success: data => {
      // this console log give you all of the response
      // console.log(data.results);
      let jobs = data.results;
      let shortJobs = jobs
        .slice(0, 5)
        .slice()
        .sort((a, b) => b.date - a.date);
      let shortList = [];
      let list = [];

      for (const job of shortJobs) {
        shortList.push(`
            <li id="${job.title}">
                <a href="https://loxo.co/job/${job.id}" target="blank" class="dataItem">${job.title}</a> 
                (${job.macro_address})
            </li>
        `);
      }
      $(`<ul/>`, {
        class: "bullet-content",
        html: shortList.join(``)
      }).appendTo("#titleJobsResponse");

      for (const job of jobs) {
        // this builds out the list list in the jobs column of the main content.
        list.push(`
                <li id="${job.title}">
                    <a href="https://loxo.co/job/${job.id}" target="blank" class="dataItem">${job.title}</a> 
                    (${job.macro_address})
                </li>
            `);
      }
      // shuffle list items based on the number of items in the list in the list so they aren't alphabetical... if you want
      // list.shuffle();
      // truncate list if you so choose, uncomment the following line and replace list.join... with topJobs.join... in the append
      // let topJobs = list.slice(0,10)
      // push final list array to html for view on homepage
      $(`<ul/>`, {
        class: "bullet-content",
        html: list.join(``)
      }).appendTo("#loxoResponse");
    }
  });

  $("#dropdown").click(() => {
    // $("#panel").toggle()
    $("#panel").slideToggle("slow");
  });

  //dropdown menu toggle
  $(".dropdownOptions").click(() => {
    console.log("success");
    // $("#panel").toggle();
    $("#panel").slideToggle("slow");
  });
}, 3100);

$(document).ready(() => {
  console.log("ready and rarin");
});
