/*Set up the clouds first, before adding the zoom*/

options = {
  src: "img/new-cloud.png", // path to image, the default is a base64
  maxWidth: 300, // max image's width
  maxHeight: 200, // max image's height
  minClouds: 1, // minimum amount of clouds
  maxClouds: 10, // maximum amount of clouds
  skyHeight: null, // height of the container element
  wind: true // animate clouds, default is false
};

$('body').jQlouds(options);


$("img.jqlouds-cloud").imageLens({
  lensSize: 200, 
  borderColor: "rgb(16, 0, 255)", 
  //imageSrc: "img/new-cloud.png"
});
