console.log("Hello! We are Online!");

// Store placement of navbar
let sticky;

// AJAX call (GET) request to "./images" for our data
const getPhotos = () => {
  const photoArray = [
    {
      title: "Tim \u0026 Jim",
      description: "The best buds that anyone could have",
      url:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?format\u003dtiny",
      created: "Fri Aug 23 13:18:09 EDT 2019"
    },
    {
      title: "Barky Spears",
      description: "Woof! I did it again",
      url:
        "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?format\u003dtiny",
      created: "Fri Aug 23 13:18:09 EDT 2019"
    },
    {
      title: "Pickles",
      description: "Judging you for dropping the ball",
      url:
        "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?format\u003dtiny",
      created: "Fri Aug 23 13:18:09 EDT 2019"
    },
    {
      title: "Woody",
      description:
        "Lost the laser pointer a while ago but still trying to play along",
      url:
        "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?format\u003dtiny",
      created: "Fri Aug 23 13:18:09 EDT 2019"
    },
    {
      title: "Mathis",
      description:
        "Beautiful, but not easily fooled by your ploys to distract her from her upcoming meal.",
      url:
        "https://images.pexels.com/photos/290204/pexels-photo-290204.jpeg?format\u003dtiny",
      created: "Fri Aug 23 13:18:09 EDT 2019"
    },
    {
      title: "Bucky",
      description:
        "Here to remind you that not all heros wear caps...some are just Dachshunds",
      url:
        "https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?format\u003dtiny",
      created: "Fri Aug 23 13:18:09 EDT 2019"
    },
    {
      title: "Montana",
      description: "Got her eyes on that prize...peanut butter",
      url:
        "https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?format\u003dtiny",
      created: "Fri Aug 23 13:18:09 EDT 2019"
    },
    {
      title: "Smol",
      description: "His name is Smol because he is just that...smol",
      url:
        "https://images.pexels.com/photos/53966/rabbit-palm-hand-snatch-53966.jpeg?format\u003dtiny",
      created: "Fri Aug 23 13:18:09 EDT 2019"
    },
    {
      title: "Frito",
      description: "Bathtime isn\u0027t his favprote but he\u0027s tolerant.",
      url:
        "https://images.pexels.com/photos/485294/pexels-photo-485294.jpeg?format\u003dtiny",
      created: "Fri Aug 23 13:18:09 EDT 2019"
    },
    {
      title: "Benny",
      description: "Strong genetic predispositon for mailmen suspicion.",
      url:
        "https://images.pexels.com/photos/1619690/pexels-photo-1619690.jpeg?format\u003dtiny",
      created: "Fri Aug 23 13:18:09 EDT 2019"
    },
    {
      title: "Len",
      description:
        "Strengths: sitting on command for treats. Weaknesses: Fear of thunder.",
      url:
        "https://images.pexels.com/photos/2664417/pexels-photo-2664417.jpeg?format\u003dtiny",
      created: "Fri Aug 23 13:18:09 EDT 2019"
    },
    {
      title: "Sasha",
      description:
        "She\u0027s beauty... she\u0027s grace... she might attack your face...",
      url:
        "https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?format\u003dtiny",
      created: "Fri Aug 23 13:18:09 EDT 2019"
    },
    {
      title: "Dottie",
      description:
        "Just always having too good a time...you can take her anywhere...wags her tail with unparalleled force.",
      url:
        "https://images.pexels.com/photos/1591939/pexels-photo-1591939.jpeg?format\u003dtiny",
      created: "Fri Aug 23 13:18:09 EDT 2019"
    },
    {
      title: "Moose",
      description:
        "Loves: walks down the street and belly rubs. Hates: whenever the door bell rings.",
      url:
        "https://images.pexels.com/photos/1390784/pexels-photo-1390784.jpeg?format\u003dtiny",
      created: "Fri Aug 23 13:18:09 EDT 2019"
    },
    {
      title: "Duchess",
      description:
        "Tolerates being held. Consistently gets the zooms between 2 to 3 am.",
      url:
        "https://images.pexels.com/photos/1383397/pexels-photo-1383397.jpeg?format\u003dtiny",
      created: "Fri Aug 23 13:18:09 EDT 2019"
    },
    {
      title: "Hagrid",
      description:
        "Don\u0027t let his size intimidate you. The sweetest bug around.",
      url:
        "https://images.pexels.com/photos/1521304/pexels-photo-1521304.jpeg?format\u003dtiny",
      created: "Fri Aug 23 13:18:09 EDT 2019"
    },
    {
      title: "Midnight",
      description: "Talented at Hide \u0026 Seek. Excellent hunter.",
      url:
        "https://images.pexels.com/photos/37337/cat-silhouette-cats-silhouette-cat-s-eyes.jpg?format\u003dtiny",
      created: "Fri Aug 23 13:18:09 EDT 2019"
    },
    {
      title: "Marten",
      description: "Senior Bun. Loves Cilantro.",
      url:
        "https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?format\u003dtiny",
      created: "Fri Aug 23 13:18:09 EDT 2019"
    },
    {
      title: "Sandy",
      description: "Often found on warm rocks.",
      url:
        "https://images.pexels.com/photos/407037/gecko-reptile-terrarium-lizard-407037.jpeg?format\u003dtiny",
      created: "Fri Aug 23 13:18:09 EDT 2019"
    },
    {
      title: "Rupert",
      description:
        "Endurance athlete with occasional sprints to the retrieve the daily feed.",
      url:
        "https://images.pexels.com/photos/886210/pexels-photo-886210.jpeg?format\u003dtiny",
      created: "Fri Aug 23 13:18:09 EDT 2019"
    },
    {
      title: "Polly",
      description:
        "Excellent imitator. Dislikes being patronized with crackers.",
      url:
        "https://images.pexels.com/photos/56733/pexels-photo-56733.jpeg?format\u003dtiny",
      created: "Fri Aug 23 13:18:09 EDT 2019"
    }
  ];
  for (let i = 0; i < photoArray.length; i++) {
    createImage(photoArray[i]);
  }
};

// Create our Image Card: image, overlay, info, checkboxes and append to our
// form
const createImage = imgObj => {
  // Date-related
  const time = imgObj.created;
  const newTime = new Date(Date.parse(time));
  const monthArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const month = monthArr[newTime.getMonth()];
  const day = newTime.getDate();
  const year = newTime.getFullYear();
  // Parent Div
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  // Image
  const img = document.createElement("img");
  img.setAttribute("data-title", imgObj.title);
  img.setAttribute("src", imgObj.url);
  img.classList.add("image");
  img.setAttribute("alt", imgObj.description);
  // Image Overlay
  const imgOverlay = document.createElement("div");
  imgOverlay.classList.add("image-overlay");
  // Info Div
  const imgOverlayInfo = document.createElement("div");
  imgOverlayInfo.classList.add("info-div");
  // Info
  const infoTitle = document.createElement("p");
  infoTitle.classList.add("info-title");
  infoTitle.innerHTML = imgObj.title;
  const infoDesc = document.createElement("p");
  infoDesc.classList.add("info-desc");
  infoDesc.innerHTML = imgObj.description;
  const infoCreated = document.createElement("p");
  infoCreated.classList.add("info-created");
  infoCreated.innerHTML = `${month} ${day}, ${year}`;

  // Append info to info-div and append info-div to overlay
  imgOverlayInfo.appendChild(infoTitle);
  imgOverlayInfo.appendChild(infoDesc);
  imgOverlayInfo.appendChild(infoCreated);
  imgOverlay.appendChild(imgOverlayInfo);

  // Checkbox for selecting images to download
  const imgCheckbox = document.createElement("input");
  imgCheckbox.setAttribute("type", "checkbox");
  imgCheckbox.setAttribute("name", imgObj.title);
  imgCheckbox.setAttribute("value", imgObj.url);
  imgCheckbox.classList.add("select-box");
  imgCheckbox.classList.add("hideable");
  imgCheckbox.classList.add("select-box-hide");
  // Custom checkbox for styles
  const imgCheckboxCustom = document.createElement("span");
  imgCheckboxCustom.classList.add("checkbox-custom");
  imgCheckboxCustom.classList.add("hideable");
  imgCheckboxCustom.classList.add("select-box-hide");

  // Append img, overlay, checkboxes to our imgContainer, and then to our form
  imgContainer.appendChild(img);
  imgContainer.appendChild(imgOverlay);
  imgContainer.appendChild(imgCheckbox);
  imgContainer.appendChild(imgCheckboxCustom);
  document.getElementById("download-form").appendChild(imgContainer);
};

// Toggle checkbox for selecting images to download
const showDownloads = () => {
  // Grab all elements with class="hideable"
  let selectBox = document.getElementsByClassName("hideable");
  // iterate HTMLCollection and toggle class (toggle visibility)
  for (let item of selectBox) {
    item.classList.toggle("select-box-hide");
  }
};

// Download images selected by User - look for checked boxes
// Then uncheck all boxes after download, and hide download features
const downloadSelected = () => {
  console.log("Form Submit Clicked");
  const selectBoxes = document.getElementsByClassName("select-box");
  // console.log(selectBoxes); // selectBoxes is an HTMLCollection
  for (let item of selectBoxes) {
    if (item.checked) {
      let url = item.value;
      let filename = item.name;
      downloadResource(url, filename);
      item.checked = false;
    }
  }
  showDownloads();
};

// To download photos, call 'downloadResource() with 'url' and 'filename'
// arguments
const forceDownload = (blob, filename) => {
  var a = document.createElement("a");
  a.download = filename;
  a.href = blob;
  document.body.appendChild(a);
  a.click();
  a.remove();
};

// Download image based on image's "url" and "filename"
const downloadResource = (url, filename) => {
  if (!filename)
    filename = url
      .split("\\")
      .pop()
      .split("/")
      .pop();
  fetch(url, {
    headers: new Headers({
      Origin: location.origin
    }),
    mode: "cors"
  })
    .then(response => response.blob())
    .then(blob => {
      let blobUrl = window.URL.createObjectURL(blob);
      forceDownload(blobUrl, filename);
    })
    .catch(e => console.error(e));
};

// Grab navbar's location
const getNavbar = () => {
  sticky = navbar.offsetTop;
};

// Make navbar stick when scrolling past it
// Make "To Top" btn visible
const stickyNav = () => {
  const navbar = document.getElementById("navbar");
  const toTopBtn = document.getElementById("a-top");

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    toTopBtn.classList.remove("hide-to-top");
  } else {
    navbar.classList.remove("sticky");
    toTopBtn.classList.add("hide-to-top");
  }
};

const scrollToTop = () => {
  document.getElementById("instructions").scrollIntoView(true);
};

// On load, get photos, get navbar location
getPhotos();
getNavbar();
// Listen for scroll
window.onscroll = () => {
  stickyNav();
};

/* Thank You for the opportunity to code out this simple website design */
