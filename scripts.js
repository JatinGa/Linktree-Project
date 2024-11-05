const socialLinks = [
    { name: 'GitHub', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>', url: 'https://github.com/JatinGa' },
    { name: 'LinkedIn', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>', url: 'https://www.linkedin.com/in/jatin-garg-41617a205/' },
    { name: 'LeetCode', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.81 11.12a2 2 0 0 0-2.81-.12l-4.69 4.16-1.95-2.34a2 2 0 0 0-3.12 2.53l2.92 3.5a2 2 0 0 0 3 .25l5.91-5.24a2 2 0 0 0 .12-2.74z"></path><path d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path></svg>', url: 'https://leetcode.com/u/JatinGarg26/' }
  
];

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Three.js', 'Responsive Design'];

function createSocialLinks() {
    const linksContainer = document.getElementById('social-links');
    socialLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.className = 'link';
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.innerHTML = `${link.icon} ${link.name}`;
        linksContainer.appendChild(a);
    });
}

function createSkillTags() {
    const skillsContainer = document.getElementById('skill-tags');
    skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.textContent = skill;
        skillsContainer.appendChild(span);
    });
}

createSocialLinks();
createSkillTags();

// Three.js Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshBasicMaterial({ color: 0x4fc3f7, wireframe: true });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

camera.position.z = 30;

function animate() {
    requestAnimationFrame(animate);
    torusKnot.rotation.x += 0.002;  // Adjusted rotation speed
    torusKnot.rotation.y += 0.002;  // Adjusted rotation speed
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
});
