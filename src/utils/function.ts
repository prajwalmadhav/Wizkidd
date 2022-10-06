// Loads JS Files to the DOM
const loadScript = (src: string) =>
  new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve(true);
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = (err) => reject(err);
    document.body.appendChild(script);
  });

export { loadScript };
