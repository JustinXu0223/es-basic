
// if(true) {
//    let b = 3;
// }
// console.log(b); // ReferenceError: b is not defined
let str = '/9j/4AAQSkZJRgABAQAAkACQAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAAB\n'
  + ' AAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAAB\n'
  + ' AAAAWgAAAAAAAACQAAAAAQAAAJAAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAA\n'
  + ' AHigAwAEAAAAAQAAAHgAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAA\n'
  + ' OEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIAHgAeAMBIgACEQEDEQH/\n'
  + ' xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUE\n'
  + ' BAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZ\n'
  + ' GiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOE\n'
  + ' hYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX\n'
  + ' 2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQID\n'
  + ' BAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIy\n'
  + ' gQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpT\n'
  + ' VFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeo\n'
  + ' qaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/\n'
  + ' 2wBDAAEBAQEBAQIBAQIDAgICAwQDAwMDBAUEBAQEBAUGBQUFBQUFBgYGBgYGBgYH\n'
  + ' BwcHBwcICAgICAkJCQkJCQkJCQn/2wBDAQEBAQICAgQCAgQJBgUGCQkJCQkJCQkJ\n'
  + ' CQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQn/3QAEAAj/\n'
  + ' 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\n'
  + ' F1HVxM3JhRRRXtnnhRRRQB//2Q';
const equalIndex = str.indexOf('=');
if (str.indexOf('=') > 0) {
  str = str.substring(0, equalIndex);
}
// test master
console.log(b); // ReferenceError: b is not defined

const strLength = str.length;
const fileLength = parseInt(strLength - (strLength / 8) * 2);
console.log(fileLength);

// var stringLength = str.length;
//
// var sizeInBytes = 4 * Math.ceil((stringLength / 3))*0.5624896334383812;
// var sizeInKb=sizeInBytes/1000;
// console.log(sizeInBytes);
