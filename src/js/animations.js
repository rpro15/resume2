// Animations JavaScript file

// Typed.js setup
document.addEventListener("DOMContentLoaded", function () {
  // Typed.js setup
  const typingElement = document.getElementById("typing-element");
  if (typingElement && window.Typed) {
    const typed = new Typed("#typing-element", {
      strings: [
        "kubectl get pods",
        "docker build -t myapp .",
        "terraform plan",
        "ansible-playbook deploy.yml",
        "prometheus --config.file=prometheus.yml",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "_",
    });
  }

  // Lottie animation setup (if file exists)
  const lottieContainer = document.getElementById("lottie-background");
  if (lottieContainer && window.lottie) {
    // Try to load Lottie particles animation from file
    fetch("assets/lottie/particles.json")
      .then((response) => response.json())
      .catch((error) => {
        console.log("Lottie animation file not found, using fallback");
        // Fallback animation data
        return {
          v: "5.5.7",
          meta: { g: "LottieFiles AE 0.1.20" },
          fr: 30,
          ip: 0,
          op: 60,
          w: 1920,
          h: 1080,
          nm: "Particles",
          ddd: 0,
          assets: [],
          layers: [
            {
              ddd: 0,
              ind: 1,
              ty: 4,
              nm: "Shape Layer 1",
              sr: 1,
              ks: {
                o: { a: 0, k: 20 },
                r: { a: 0, k: 0 },
                p: { a: 0, k: [960, 540] },
                a: { a: 0, k: [0, 0] },
                s: { a: 0, k: [100, 100] },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      d: 1,
                      ty: "el",
                      s: { a: 0, k: [10, 10] },
                      p: { a: 0, k: [0, 0] },
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [0.2, 0.8, 1, 1] },
                      o: { a: 0, k: 100 },
                    },
                  ],
                },
              ],
              ip: 0,
              op: 60,
              st: 0,
            },
          ],
        };
      })
      .then((animationData) => {
        if (window.lottie && lottieContainer) {
          lottie.loadAnimation({
            container: lottieContainer,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animationData,
          });
        }
      })
      .catch((error) => console.log("Could not load animation:", error));
  }
});
