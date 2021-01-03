export const CORNER = {
  topLeft: 'topLeft',
  topRight: 'topRight',
  bottomLeft: 'bottomLeft',
  bottomRight: 'bottomRight',
}

export const BLUE_BLOBS = [
  'M49,-50.2C59.2,-38.8,60.2,-19.4,57.7,-2.5C55.3,14.4,49.3,28.9,39.1,39.6C28.9,50.2,14.4,57.1,-3.9,61C-22.2,64.9,-44.5,65.8,-53.9,55.1C-63.4,44.5,-60.1,22.2,-57.8,2.3C-55.5,-17.6,-54.2,-35.3,-44.7,-46.6C-35.3,-58,-17.6,-63.1,0.9,-64C19.4,-64.8,38.8,-61.5,49,-50.2Z',
  'M42.8,-38.1C58.4,-27.3,75.7,-13.7,78.4,2.7C81.2,19.1,69.3,38.3,53.8,48.9C38.3,59.5,19.1,61.6,-1.5,63.1C-22.1,64.5,-44.2,65.4,-52.8,54.8C-61.3,44.2,-56.4,22.1,-54,2.3C-51.7,-17.4,-52,-34.9,-43.4,-45.6C-34.9,-56.3,-17.4,-60.3,-1.9,-58.4C13.7,-56.5,27.3,-48.8,42.8,-38.1Z',
  'M45,-46.9C53.5,-36.4,52.5,-18.2,54.6,2C56.6,22.3,61.7,44.5,53.1,59C44.5,73.5,22.3,80.1,4.8,75.4C-12.7,70.6,-25.5,54.4,-39.6,39.9C-53.7,25.5,-69.3,12.7,-72.8,-3.6C-76.4,-19.8,-68,-39.7,-53.8,-50.2C-39.7,-60.7,-19.8,-62,-0.8,-61.1C18.2,-60.3,36.4,-57.4,45,-46.9Z',
  'M43.1,-49.7C52.8,-33.3,55.7,-16.7,57.9,2.2C60.1,21,61.6,42.1,51.9,52C42.1,61.9,21,60.6,1.6,59.1C-17.9,57.5,-35.8,55.6,-51.9,45.7C-68,35.8,-82.2,17.9,-79.9,2.3C-77.6,-13.3,-58.7,-26.6,-42.6,-42.9C-26.6,-59.3,-13.3,-78.7,1.7,-80.4C16.7,-82.1,33.3,-66,43.1,-49.7Z',
  'M39.1,-38.9C51.2,-26.9,62.1,-13.4,66.9,4.8C71.7,23,70.3,45.9,58.1,53.5C45.9,61.2,23,53.5,3.4,50.1C-16.1,46.6,-32.2,47.5,-41.8,39.8C-51.5,32.2,-54.6,16.1,-56.4,-1.7C-58.1,-19.6,-58.4,-39.1,-48.8,-51.1C-39.1,-63.1,-19.6,-67.5,-3.1,-64.4C13.4,-61.4,26.9,-50.9,39.1,-38.9Z',
]

export const RED_BLOBS = [
  'M44.8,-51.1C55.1,-34.6,58.4,-17.3,58.6,0.3C58.9,17.8,56.2,35.7,45.9,49.6C35.7,63.5,17.8,73.6,-0.2,73.8C-18.3,74,-36.5,64.4,-53,50.5C-69.5,36.5,-84.1,18.3,-82.7,1.5C-81.2,-15.3,-63.6,-30.7,-47.1,-47.2C-30.7,-63.6,-15.3,-81.3,1,-82.3C17.3,-83.2,34.6,-67.6,44.8,-51.1Z',
  'M44.2,-45.2C58.3,-30.2,71.2,-15.1,69.8,-1.4C68.4,12.3,52.6,24.5,38.6,35.6C24.5,46.6,12.3,56.5,-0.1,56.6C-12.5,56.7,-25,47.1,-34.4,36.1C-43.7,25,-49.8,12.5,-53.2,-3.4C-56.6,-19.3,-57.2,-38.6,-47.9,-53.6C-38.6,-68.6,-19.3,-79.4,-2.1,-77.3C15.1,-75.2,30.2,-60.3,44.2,-45.2Z',
  'M57.9,-52.8C74,-41.8,85.2,-20.9,81,-4.3C76.7,12.4,57,24.8,40.9,40.8C24.8,56.8,12.4,76.5,-0.9,77.3C-14.1,78.2,-28.3,60.3,-37.7,44.3C-47,28.3,-51.6,14.1,-51.5,0.1C-51.4,-13.9,-46.6,-27.8,-37.2,-38.8C-27.8,-49.7,-13.9,-57.6,3.5,-61.1C20.9,-64.6,41.8,-63.7,57.9,-52.8Z',
  'M35.1,-31.2C51.8,-18.5,75.8,-9.2,83,7.2C90.2,23.6,80.4,47.1,63.8,58.6C47.1,70.1,23.6,69.5,0.6,68.9C-22.3,68.3,-44.6,67.6,-52.9,56.1C-61.2,44.6,-55.4,22.3,-55,0.4C-54.6,-21.5,-59.5,-43,-51.3,-55.8C-43,-68.5,-21.5,-72.4,-6.1,-66.3C9.2,-60.2,18.5,-43.9,35.1,-31.2Z',
  'M33.1,-38.6C42.8,-23.3,50.8,-11.6,54.6,3.8C58.4,19.2,58,38.5,48.3,47.9C38.5,57.4,19.2,57,-1.8,58.9C-22.9,60.7,-45.9,64.8,-58.6,55.3C-71.3,45.9,-73.8,22.9,-74.1,-0.3C-74.4,-23.5,-72.5,-47,-59.7,-62.4C-47,-77.7,-23.5,-84.9,-5.9,-79C11.6,-73,23.3,-54,33.1,-38.6Z',
]

export const TAN_BLOBS = [
  'M56.9,-52.2C72.2,-41.5,82.1,-20.8,80.4,-1.7C78.7,17.3,65.3,34.6,50,49.7C34.6,64.7,17.3,77.5,0.3,77.1C-16.6,76.8,-33.2,63.3,-46.5,48.3C-59.9,33.2,-69.9,16.6,-69.7,0.1C-69.6,-16.4,-59.4,-32.8,-46.1,-43.5C-32.8,-54.2,-16.4,-59.2,2.2,-61.4C20.8,-63.6,41.5,-63,56.9,-52.2Z',
  'M39.7,-35.3C53.4,-25.9,67.9,-13,72,4C76,21,69.6,42.1,55.8,55.9C42.1,69.8,21,76.5,-0.7,77.1C-22.4,77.8,-44.7,72.4,-59.2,58.6C-73.7,44.7,-80.3,22.4,-77.2,3.1C-74.1,-16.1,-61.2,-32.2,-46.7,-41.6C-32.2,-51,-16.1,-53.6,-1.6,-52.1C13,-50.5,25.9,-44.7,39.7,-35.3Z',
  'M44,-37.8C58.2,-29.8,71.6,-14.9,74.5,2.9C77.4,20.7,69.7,41.4,55.5,51.7C41.4,62.1,20.7,62.2,5.7,56.5C-9.2,50.7,-18.4,39.1,-34.4,28.8C-50.5,18.4,-73.3,9.2,-77.6,-4.3C-81.9,-17.8,-67.6,-35.6,-51.6,-43.6C-35.6,-51.6,-17.8,-49.9,-1.4,-48.4C14.9,-47,29.8,-45.8,44,-37.8Z',
  'M44.8,-47.8C57.9,-31.7,68.3,-15.9,68.7,0.5C69.2,16.8,59.8,33.6,46.7,40C33.6,46.5,16.8,42.7,1.4,41.3C-14,39.9,-28,40.9,-44.5,34.4C-61,28,-80.1,14,-80.1,0C-80.1,-14,-61,-27.9,-44.5,-44.1C-27.9,-60.2,-14,-78.5,0.9,-79.4C15.9,-80.3,31.7,-64,44.8,-47.8Z',
  'M52.2,-49.1C68.3,-36.2,82.3,-18.1,81.6,-0.6C81,16.9,65.8,33.7,49.7,41.4C33.7,49.2,16.9,47.8,-3,50.8C-22.9,53.8,-45.8,61.3,-56.4,53.5C-66.9,45.8,-65.2,22.9,-60.3,4.8C-55.5,-13.2,-47.5,-26.4,-37,-39.2C-26.4,-52.1,-13.2,-64.6,2.5,-67C18.1,-69.5,36.2,-61.9,52.2,-49.1Z',
]

export const SOCIAL_LINKS = {
  twitter: {
    id: 'twitter',
    url: 'https://twitter.com/ianhirschfeld',
    blobs: [
      'M62,-17.4C70.2,5.2,59.9,36.7,37.6,53.3C15.2,69.8,-19,71.6,-39.7,56.2C-60.3,40.8,-67.4,8.3,-58.6,-15.2C-49.7,-38.7,-24.8,-53.2,1,-53.5C26.9,-53.9,53.7,-40,62,-17.4Z',
      'M54.3,-18.4C62.1,6.3,54.4,35.3,36.3,47.9C18.3,60.5,-10.1,56.7,-30.4,42C-50.7,27.2,-62.9,1.4,-56.5,-21.4C-50.1,-44.2,-25,-63.9,-0.9,-63.6C23.3,-63.3,46.5,-43,54.3,-18.4Z',
    ],
  },
  linkedin: {
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/ianhirschfeld',
    blobs: [
      'M67.3,-24.5C73.8,-1.7,56.6,26.3,32.7,43.2C8.8,60.2,-21.8,66.2,-44.2,52C-66.5,37.8,-80.7,3.5,-71.9,-22.3C-63.2,-48.1,-31.6,-65.3,-0.6,-65.1C30.4,-64.9,60.7,-47.3,67.3,-24.5Z',
      'M47.9,-12.8C56.1,9.6,52.5,38.5,35.5,51.5C18.4,64.6,-12.2,61.7,-35.3,45.6C-58.4,29.5,-74.1,0.2,-67,-20.8C-59.8,-41.8,-29.9,-54.3,-5,-52.7C19.9,-51.1,39.7,-35.2,47.9,-12.8Z',
    ],
  },
  github: {
    id: 'github',
    url: 'https://github.com/ianhirschfeld',
    blobs: [
      'M69.5,-19.3C77.9,3.2,64.1,36.2,40.5,52.6C16.9,69,-16.5,68.8,-38.9,52.7C-61.4,36.6,-72.8,4.6,-64.5,-17.8C-56.2,-40.1,-28.1,-52.9,1.2,-53.3C30.6,-53.7,61.1,-41.7,69.5,-19.3Z',
      'M70.6,-24.5C78.2,0.3,61.8,31.4,37.2,48.7C12.5,66,-20.3,69.6,-39.6,55.4C-58.8,41.2,-64.5,9.2,-55.7,-17.5C-46.8,-44.1,-23.4,-65.3,4.1,-66.6C31.5,-68,63.1,-49.3,70.6,-24.5Z',
    ],
  },
  medium: {
    id: 'medium',
    url: 'https://medium.com/@ianhirschfeld',
    blobs: [
      'M71,-23.2C79.3,2.5,64.5,35.5,39.2,54C13.8,72.4,-22.2,76.3,-44.6,60.3C-67,44.3,-75.7,8.4,-66,-19.2C-56.3,-46.8,-28.1,-66.2,1.6,-66.7C31.3,-67.3,62.7,-48.9,71,-23.2Z',
      'M73.1,-20C82.9,6.2,70.7,43.4,47.1,59.2C23.5,75,-11.6,69.6,-33.8,52.1C-56.1,34.6,-65.6,5.1,-57.9,-18.5C-50.1,-42,-25.1,-59.6,3.3,-60.7C31.7,-61.8,63.4,-46.3,73.1,-20Z',
    ],
  },
}
