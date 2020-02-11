window.onload = function() {
  // Begin particle.js script (background)
  Particles.init({
    selector: '.background',
    color: '#75A5B7',
    maxParticles: 130,
    connectParticles: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 80
        }
      }, {
        breakpoint: 375,
        options: {
          maxParticles: 50
        }
      }
    ]
  });
  // End particle.js script
};