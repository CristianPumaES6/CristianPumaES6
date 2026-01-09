const { spawn } = require('child_process');
require('dotenv').config();

const port = process.env.PORT || 3000;
console.log(`Starting Next.js production server on port ${port}...`);

// Use 'npx' to launch next to ensure environment is set up correctly and cross-platform compatibility
const command = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const args = ['next', 'start', '-p', port];

const child = spawn(command, args, {
    stdio: 'inherit',
    shell: true
});

child.on('error', (err) => {
    console.error('Failed to start subprocess.', err);
});

child.on('exit', (code) => {
    process.exit(code);
});
