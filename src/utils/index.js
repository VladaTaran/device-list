export const options = [
  {
    name: 'device_type',
    options: ['any', 'parking sensor', 'other sensor']
  }, {
    name: 'activation_status',
    options: ['any', 'active', 'deactive']
  }, {
    name: 'place_id',
    options: ['any', '10167', '10160', 'without']
  }, {
    name: 'protocol',
    options: ['any', '1', '2', '3']
  }
];

export const labelTransform = label => {
  return label.replace(/_/g, " ")
};